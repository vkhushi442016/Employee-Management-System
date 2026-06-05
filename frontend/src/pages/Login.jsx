import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Lock, Mail, ChevronRight } from 'lucide-react';
import API from '../services/api';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(e) {

        e.preventDefault();

        try {
            //http://localhost:5000/api/auth/login
            const res = await API.post(
                '/auth/login',
                formData
            );

            localStorage.setItem(
                'token',
                res.data.token
            );

            localStorage.setItem(
                'user',
                JSON.stringify(res.data.user)
            );

            navigate('/dashboard');

        } catch (error) {

            console.log(error);
        }
    }

    return (

        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                        <Lock className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
                    <p className="text-slate-500 mt-2">Please enter your employee credentials</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex justify-between mb-1.5">
                            <label className="text-sm font-medium text-slate-700">Password</label>
                            <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-800"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md active:scale-[0.98]"
                    >
                        Sign In to Dashboard
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center mt-8 text-sm text-slate-500">
                    Trouble logging in? <a href="#" className="text-blue-600 font-medium hover:underline">Contact HR Support</a>
                </p>
            </div>
        </div>
    );
}

export default Login;