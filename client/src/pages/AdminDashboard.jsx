import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiMail, FiFileText, FiLogOut, FiTrash2, FiCheck, FiMenu, FiX, FiRefreshCw, FiEye } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const tabs = [
  { id: 'messages', label: 'Messages', icon: <FiMail /> },
  { id: 'blogs', label: 'Blogs', icon: <FiFileText /> },
];

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem('adminToken');
  const headers = { Authorization: `Bearer ${token}` };

  const fetchMessages = async () => {
    try {
      const res = await axios.get('/api/messages', { headers });
      setMessages(res.data.messages || []);
    } catch { toast.error('Failed to fetch messages'); }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('/api/blogs');
      setBlogs(res.data.blogs || []);
    } catch { toast.error('Failed to fetch blogs'); }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await Promise.all([fetchMessages(), fetchBlogs()]);
      setLoading(false);
    };
    load();
  }, []);

  const markRead = async (id) => {
    try {
      await axios.patch(`/api/messages/${id}/read`, {}, { headers });
      setMessages(msgs => msgs.map(m => m._id === id ? { ...m, isRead: true } : m));
      toast.success('Marked as read');
    } catch { toast.error('Failed to update'); }
  };

  const deleteMessage = async (id) => {
    if (!confirm('Delete this message?')) return;
    try {
      await axios.delete(`/api/messages/${id}`, { headers });
      setMessages(msgs => msgs.filter(m => m._id !== id));
      toast.success('Message deleted');
    } catch { toast.error('Failed to delete'); }
  };

  const deleteBlog = async (id) => {
    if (!confirm('Delete this blog?')) return;
    try {
      await axios.delete(`/api/blogs/${id}`, { headers });
      setBlogs(b => b.filter(x => x._id !== id));
      toast.success('Blog deleted');
    } catch { toast.error('Failed to delete'); }
  };

  const handleLogout = () => { logout(); navigate('/'); toast.success('Logged out'); };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)' }}>
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 glass-card border-r border-indigo-100 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-indigo-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>M</div>
            <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}><span className="gradient-text">Admin</span> Panel</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'}`}>
              {tab.icon} {tab.label}
              {tab.id === 'messages' && unreadCount > 0 && <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{unreadCount}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-indigo-50 space-y-2">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"><FiHome /> View Site</button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"><FiLogOut /> Logout</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-indigo-50 glass-card">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-indigo-50">{sidebarOpen ? <FiX /> : <FiMenu />}</button>
            <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{activeTab === 'messages' ? '📬 Messages' : '📝 Blogs'}</h1>
          </div>
          <button onClick={() => { fetchMessages(); fetchBlogs(); toast.success('Refreshed!'); }} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-all"><FiRefreshCw /> Refresh</button>
        </div>

        <div className="p-4 lg:p-6">
          {loading ? (
            <div className="flex items-center justify-center py-20"><span className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" /></div>
          ) : activeTab === 'messages' ? (
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-16 text-slate-400"><FiMail className="mx-auto text-4xl mb-3" /><p>No messages yet</p></div>
              ) : messages.map((msg, i) => (
                <motion.div key={msg._id || i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`glass-card rounded-2xl p-5 ${!msg.isRead ? 'border-l-4 border-l-indigo-500' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-800 truncate">{msg.name}</h3>
                        {!msg.isRead && <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-semibold">New</span>}
                      </div>
                      <p className="text-xs text-slate-400 mb-1">{msg.email}</p>
                      <p className="text-sm font-semibold text-slate-700 mb-2">{msg.subject}</p>
                      <p className="text-sm text-slate-500">{msg.message}</p>
                      <p className="text-xs text-slate-300 mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {!msg.isRead && <button onClick={() => markRead(msg._id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-all" title="Mark read"><FiCheck /></button>}
                      <button onClick={() => deleteMessage(msg._id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-all" title="Delete"><FiTrash2 /></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {blogs.length === 0 ? (
                <div className="text-center py-16 text-slate-400"><FiFileText className="mx-auto text-4xl mb-3" /><p>No blogs yet</p></div>
              ) : blogs.map((blog, i) => (
                <motion.div key={blog._id || i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-1">{blog.title}</h3>
                      <p className="text-sm text-slate-500 mb-2">{blog.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><FiEye /> {blog.views} views</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button onClick={() => deleteBlog(blog._id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-all"><FiTrash2 /></button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default AdminDashboard;
