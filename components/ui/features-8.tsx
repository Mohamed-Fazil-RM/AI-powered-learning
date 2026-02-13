
import React from 'react'
import { Card, CardContent } from './card'
import { Shield, Users, Fingerprint, Download, User } from 'lucide-react'

export function TrustFeatures() {
    return (
        <section className="py-24 md:py-32 bg-transparent">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Card 1: Customizable */}
                    <Card className="bg-white border-gray-200 shadow-sm flex flex-col items-center justify-center min-h-[320px]">
                        <CardContent className="pt-6 flex flex-col items-center">
                            <div className="relative mb-8">
                                <svg className="absolute -inset-8 w-48 h-48 text-gray-100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 20C144.183 20 180 55.8172 180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100C20 55.8172 55.8172 20 100 20Z" stroke="currentColor" strokeWidth="2" strokeDasharray="12 8" />
                                    <path d="M30 110C35 60 80 30 130 40C180 50 190 110 160 150C130 190 60 180 40 140" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span className="text-5xl font-extrabold text-gray-900 relative">100%</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Customizable</h2>
                        </CardContent>
                    </Card>

                    {/* Card 2: Secure by default */}
                    <Card className="bg-white border-gray-200 shadow-sm flex flex-col items-center text-center p-8 min-h-[320px]">
                        <CardContent className="pt-0 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full border border-gray-100 flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-2 border border-gray-50 rounded-full" />
                                <Fingerprint size={48} strokeWidth={1} className="text-gray-400" />
                                <div className="absolute h-[1px] w-24 bg-gray-900 top-1/2 left-1/2 -translate-x-1/2" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Secure by default</h2>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">
                                Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3: Faster than light (Top Right) */}
                    <Card className="bg-white border-gray-200 shadow-sm flex flex-col p-8 min-h-[320px]">
                        <CardContent className="pt-0 flex flex-col items-center">
                            <div className="w-full flex justify-between items-end mb-10 px-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                                        <Download size={14} className="text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Download</span>
                                </div>
                                <span className="text-xs font-bold text-gray-800">14.34 mbps</span>
                            </div>
                            <svg className="w-full h-16 text-gray-900" viewBox="0 0 400 100" preserveAspectRatio="none">
                                <path d="M0 80 Q 20 20, 50 60 T 100 40 T 150 70 T 200 30 T 250 50 T 300 20 T 350 60 T 400 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            <div className="mt-auto text-center pt-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Faster than light</h2>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px]">
                                    Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card 4: Faster than light (Bottom Left) */}
                    <Card className="bg-white border-gray-200 shadow-sm p-10 min-h-[320px]">
                        <CardContent className="pt-0 h-full flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center">
                                    <Shield size={20} strokeWidth={1.5} className="text-gray-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Faster than light</h2>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 w-full border-l border-t border-gray-50 rounded-tl-3xl p-6 bg-gray-50/20">
                                <svg className="w-full h-full text-gray-900" viewBox="0 0 200 120" preserveAspectRatio="none">
                                    <path d="M0 100 L 20 110 L 40 80 L 60 90 L 80 50 L 100 70 L 120 40 L 140 60 L 160 30 L 180 50 L 200 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="200" cy="20" r="3" fill="currentColor" />
                                </svg>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 5: Keep your loved ones safe */}
                    <Card className="bg-white border-gray-200 shadow-sm p-10 min-h-[320px]">
                        <CardContent className="pt-0 h-full flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center">
                                    <Users size={24} strokeWidth={1} className="text-gray-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Keep your loved ones safe</h2>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 w-full flex flex-col justify-center space-y-4">
                                <div className="flex items-center justify-end gap-3">
                                    <span className="bg-white border border-gray-100 rounded-md px-3 py-1 text-[10px] font-bold text-gray-500 shadow-sm">Likeur</span>
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=64" className="w-10 h-10 rounded-full border-2 border-white shadow-md" alt="Avatar" />
                                </div>
                                <div className="flex items-center gap-3 pl-8">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=64" className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="Avatar" />
                                    <span className="bg-white border border-gray-100 rounded-md px-3 py-1 text-[10px] font-bold text-gray-500 shadow-sm">M. Irung</span>
                                </div>
                                <div className="flex items-center justify-end gap-3 pr-4">
                                    <span className="bg-white border border-gray-100 rounded-md px-3 py-1 text-[10px] font-bold text-gray-500 shadow-sm">B. Ng</span>
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=64" className="w-10 h-10 rounded-full border-2 border-white shadow-md" alt="Avatar" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
