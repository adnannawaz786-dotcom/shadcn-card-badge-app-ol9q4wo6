import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Star, Heart, MessageCircle, Share2, Calendar, MapPin, Clock, Users, Award, Zap, Shield, Sparkles } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      delay: 0.2,
      type: "spring",
      stiffness: 200
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const cardData = [
    {
      id: 1,
      title: "Modern Web Development",
      description: "Learn the latest technologies and frameworks for building modern web applications with React, Next.js, and TypeScript.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "React", variant: "default", icon: <Zap className="w-3 h-3" /> },
        { text: "Next.js", variant: "secondary" },
        { text: "TypeScript", variant: "outline" }
      ],
      stats: { likes: 245, comments: 32, shares: 18 },
      date: "2024-01-15",
      location: "Online",
      duration: "8 weeks",
      participants: 1250
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      description: "Master the art of creating beautiful and functional user interfaces with modern design principles and tools.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "Design", variant: "destructive", icon: <Sparkles className="w-3 h-3" /> },
        { text: "Figma", variant: "default" },
        { text: "Advanced", variant: "secondary" }
      ],
      stats: { likes: 189, comments: 24, shares: 12 },
      date: "2024-02-01",
      location: "San Francisco",
      duration: "6 weeks",
      participants: 850
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete guide to becoming a full-stack developer with Node.js, Express, MongoDB, and modern frontend frameworks.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "Full Stack", variant: "default", icon: <Shield className="w-3 h-3" /> },
        { text: "Node.js", variant: "outline" },
        { text: "MongoDB", variant: "secondary" },
        { text: "Expert", variant: "destructive" }
      ],
      stats: { likes: 312, comments: 45, shares: 28 },
      date: "2024-01-20",
      location: "Remote",
      duration: "12 weeks",
      participants: 2100
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications using React Native and learn deployment strategies for iOS and Android.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "React Native", variant: "default" },
        { text: "Mobile", variant: "secondary", icon: <Award className="w-3 h-3" /> },
        { text: "Cross-platform", variant: "outline" }
      ],
      stats: { likes: 156, comments: 19, shares: 9 },
      date: "2024-02-10",
      location: "New York",
      duration: "10 weeks",
      participants: 720
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      description: "Learn modern DevOps practices, containerization with Docker, Kubernetes orchestration, and cloud deployment strategies.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "DevOps", variant: "destructive", icon: <Shield className="w-3 h-3" /> },
        { text: "Docker", variant: "default" },
        { text: "Kubernetes", variant: "secondary" },
        { text: "AWS", variant: "outline" }
      ],
      stats: { likes: 278, comments: 38, shares: 22 },
      date: "2024-01-25",
      location: "Seattle",
      duration: "14 weeks",
      participants: 1450
    },
    {
      id: 6,
      title: "Data Science & AI",
      description: "Dive into machine learning, artificial intelligence, and data analysis using Python, TensorFlow, and modern ML frameworks.",
      image: "/api/placeholder/400/200",
      badges: [
        { text: "Python", variant: "default", icon: <Zap className="w-3 h-3" /> },
        { text: "Machine Learning", variant: "destructive" },
        { text: "TensorFlow", variant: "secondary" },
        { text: "AI", variant: "outline" }
      ],
      stats: { likes: 423, comments: 67, shares: 45 },
      date: "2024-02-05",
      location: "Boston",
      duration: "16 weeks",
      participants: 1890
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-20 px-4 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Shadcn UI Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Explore beautiful card and badge components built with Shadcn UI, featuring modern design patterns and smooth animations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <Badge variant="default" className="text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Modern Design
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Interactive
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Accessible
              </Badge>
            </motion.div>
          </div>
        </motion.section>

        {/* Cards Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Courses
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover our collection of comprehensive courses designed to elevate your skills and advance your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardData.map((card, index) => (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4 z-10">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleFavorite(card.id)}
                            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                              favorites.has(card.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${favorites.has(card.id) ? 'fill-current' : ''}`} />
                          </motion.button>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <motion.div
                            variants={badgeVariants}
                            className="flex flex-wrap gap-2"
                          >
                            {card.badges.slice(0, 2).map((badge, badgeIndex) => (
                              <Badge
                                key={badgeIndex}
                                variant={badge.variant}
                                className="flex items-center gap-1 text-xs backdrop-blur-sm"
                              >
                                {badge.icon}
                                {badge.text}
                              </Badge>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {card.title}
                        </CardTitle>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">4.8</span>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {card.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Additional badges */}
                      <div className="flex flex-wrap gap-2">
                        {card.badges.slice(2).map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            variant={badge.variant}
                            className="flex items-center gap-1 text-xs"
                          >
                            {badge.icon}
                            {badge.text}
                          </Badge>
                        ))}
                      </div>

                      {/* Course details */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(card.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{card.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{card.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{card.participants.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Social stats */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span