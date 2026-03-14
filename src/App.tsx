import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Anchor, ShieldAlert, BrainCircuit, Target, Users, Lightbulb, AlertTriangle, BookOpen, Clock, Award } from 'lucide-react';

// USWDS Navy Theme Colors
// Primary Dark: #112e51
// Gold: #fdb81e
// Red: #e31c3d
// Light Blue: #00bde3
// White: #ffffff
// Gray: #f0f0f0

const slides = [
  // Slide 1: Title & Team
  {
    id: 'title',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#fdb81e]"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#ffffff] p-6 rounded-full border-4 border-[#fdb81e] shadow-lg"
        >
          <Anchor className="w-20 h-20 text-[#112e51]" />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          领导与沟通
        </motion.h1>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl text-[#00bde3] font-light tracking-wide"
        >
          里程碑案例：美国核潜艇“佛罗里达号”事件分析
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="pt-8 flex flex-col items-center w-full max-w-4xl"
        >
          <div className="h-1 w-24 bg-[#e31c3d] mb-6"></div>
          <p className="text-gray-300 text-lg mb-6 tracking-widest">2026年3月14日</p>
          
          <div className="bg-[#0a1c32]/80 border border-[#112e51] p-6 rounded-xl w-full">
            <h3 className="text-[#fdb81e] font-bold mb-4 text-xl border-b border-[#112e51] pb-2">小组成员</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-200">
              <div className="flex justify-between px-2"><span className="font-semibold">沈超</span><span>2024319123</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">李斌</span><span>2025319149</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">汪新立</span><span>2025319036</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">周敏</span><span>2025319135</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">孟超</span><span>2025319130</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">唐志伟</span><span>2025319316</span></div>
              <div className="flex justify-between px-2"><span className="font-semibold">薛辉</span><span>2025319117</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  // Slide 2: Event Core Elements
  {
    id: 'background',
    content: (
      <div className="flex flex-col h-full justify-center px-12 md:px-24">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <Clock className="w-10 h-10 mr-4 text-[#fdb81e]" />
            事件核心要素
          </h2>
          <div className="h-1 w-20 bg-[#e31c3d]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ffffff] p-8 rounded-lg shadow-xl border-t-8 border-[#112e51]"
          >
            <h3 className="text-2xl font-bold text-[#112e51] mb-6 border-b-2 border-gray-100 pb-2">解职背景与时间线</h3>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#e31c3d] mr-3 font-bold">▶</span>
                <span><strong>时间：</strong> 1997年8月12日</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e31c3d] mr-3 font-bold">▶</span>
                <span><strong>被解职者：</strong> 迈克尔·J·阿方索中校 (蓝队指挥官)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e31c3d] mr-3 font-bold">▶</span>
                <span><strong>执行者：</strong> 第九潜艇群指挥官 保罗·苏利文少将</span>
              </li>
              <li className="flex items-start bg-gray-50 p-3 rounded border-l-4 border-[#fdb81e]">
                <span className="text-[#112e51] font-semibold">历史意义：这是三叉戟核潜艇15年运作历史上首次指挥官被解职。</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#ffffff] p-8 rounded-lg shadow-xl border-t-8 border-[#e31c3d]"
          >
            <h3 className="text-2xl font-bold text-[#112e51] mb-6 border-b-2 border-gray-100 pb-2">威权式恐怖管理表现</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#112e51] mr-3 font-bold">▪</span>
                <span><strong>公开羞辱：</strong> 违背“公开表扬、私下惩罚”原则，当众羞辱下属。</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#112e51] mr-3 font-bold">▪</span>
                <span><strong>情绪失控：</strong> 因饮料机没有可乐、餐具少一把叉子等琐事大发雷霆，痛骂供应官、XO和COB。</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#112e51] mr-3 font-bold">▪</span>
                <span><strong>系统性孤立：</strong> 忽视执行官(XO)和潜艇总军士长(COB)的意见，切断关键指挥链。</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#112e51] mr-3 font-bold">▪</span>
                <span><strong>沟通断裂：</strong> 船员不敢汇报问题，形成自下而上的信息封锁。</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    )
  },
  // Slide 3: Crew Reaction
  {
    id: 'crew_reaction',
    content: (
      <div className="flex flex-col h-full justify-center px-12 md:px-24">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <Users className="w-10 h-10 mr-4 text-[#00bde3]" />
            船员反应与文化异化
          </h2>
          <div className="h-1 w-20 bg-[#fdb81e]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a1c32] p-6 rounded-lg border border-[#112e51] border-l-4 border-l-[#e31c3d]"
          >
            <h3 className="text-xl font-bold text-white mb-3">身心耗竭与士气低落</h3>
            <p className="text-gray-300 leading-relaxed">
              船员返港时“身体和精神上都被打垮了”。苏利文少将敏锐地注意到船员显得极度“沮丧与绝望”(despondent)。
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0a1c32] p-6 rounded-lg border border-[#112e51] border-l-4 border-l-[#fdb81e]"
          >
            <h3 className="text-xl font-bold text-white mb-3">隐喻性抵抗 (电影之夜)</h3>
            <p className="text-gray-300 leading-relaxed">
              船员刻意选择观看《凯恩舰事变》和《红潮》（均涉及指挥官面临兵变）。当电影中舰长因琐事爆发时，船员大喊：“嘿，听起来熟悉吗？”
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[#0a1c32] p-6 rounded-lg border border-[#112e51] border-l-4 border-l-[#00bde3]"
          >
            <h3 className="text-xl font-bold text-white mb-3">地下出版物</h3>
            <p className="text-gray-300 leading-relaxed">
              船员创办名为《地下》(The Underground) 的通讯，用幽默和讽刺的方式传播舰长因琐事爆发的消息，作为心理宣泄。
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#112e51] mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-[#e31c3d]" />
              阿方索的认知盲区
            </h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              阿方索对解职感到“震惊”，其辩护理由是：取得了大修后认证和检查的<span className="text-[#e31c3d] font-bold">最佳成绩</span>。
              <br/><br/>
              <span className="text-sm text-gray-500">他将任务绩效等同于领导效能，完全忽视了人际关系和团队氛围的崩塌。</span>
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  // Slide 4: Core Leadership Issues
  {
    id: 'core_issues',
    content: (
      <div className="flex flex-col h-full justify-center px-12 md:px-24">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <Target className="w-10 h-10 mr-4 text-[#e31c3d]" />
            反映的核心领导力问题
          </h2>
          <div className="h-1 w-20 bg-[#fdb81e]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ffffff] p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#112e51] mb-6">1. 恐惧驱动 vs 信任驱动</h3>
            <blockquote className="border-l-4 border-[#e31c3d] pl-4 italic text-gray-600 mb-6">
              "他有机会体验指挥的魔力，但他浪费了。恐惧和恐吓导致必然的毁灭。" —— 苏利文少将
            </blockquote>
            <p className="text-gray-700 mb-4">
              阿方索建立了基于恐惧的权威，而非基于信任的追随。导致组织表现为：谨慎、秘密、指责他人、过度控制和人际疏离。
            </p>
            
            <h3 className="text-2xl font-bold text-[#112e51] mb-4 mt-8">2. 任务导向 vs 关系导向失衡</h3>
            <p className="text-gray-700">
              在核潜艇高风险环境中，阿方索认为高认证分数比高质量人际关系更重要。但当任务绩效以摧毁人力资本为代价时，它是不可持续的。
            </p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#112e51] p-8 rounded-lg border border-[#00bde3]/30 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#fdb81e] mb-6">3. 情绪智力 (EQ) 的全面缺失</h3>
            <ul className="space-y-4 text-gray-200">
              <li className="bg-[#0a1c32] p-3 rounded">
                <strong className="text-[#00bde3]">自我意识：</strong> 缺乏对自己情绪爆发影响的认知。
              </li>
              <li className="bg-[#0a1c32] p-3 rounded">
                <strong className="text-[#00bde3]">自我管理：</strong> 无法克制对琐事的情绪反应（如汽水、叉子）。
              </li>
              <li className="bg-[#0a1c32] p-3 rounded">
                <strong className="text-[#00bde3]">社会意识：</strong> 未能察觉船员的绝望状态和讽刺性抵抗。
              </li>
              <li className="bg-[#0a1c32] p-3 rounded">
                <strong className="text-[#00bde3]">关系管理：</strong> 破坏了与XO和COB的关键关系，导致指挥链失效。
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-[#e31c3d]/20 border border-[#e31c3d]/50 rounded text-white text-sm">
              <strong>致命断裂：</strong> 忽视了潜艇指挥中关键的首席士官(COB)纽带，失去了对船员真实状态的感知渠道。
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  // Slide 5: Deep Dive Opinions
  {
    id: 'opinions',
    content: (
      <div className="flex flex-col h-full justify-center px-12 md:px-24">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center">
            <BrainCircuit className="w-10 h-10 mr-4 text-[#fdb81e]" />
            深度剖析：为何选择“高压与强势”？
          </h2>
          <div className="h-1 w-20 bg-[#00bde3]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-t-4 border-[#112e51]"
          >
            <h3 className="text-lg font-bold text-[#112e51] mb-3">1. 高压是“最省事”的捷径</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              不用花时间沟通、共情、激励，不用做制度和目标拆解。吼两句员工立刻动起来，短期效率看似很高。对能力一般、没方法的领导，这是最低门槛的管理方式。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-t-4 border-[#e31c3d]"
          >
            <h3 className="text-lg font-bold text-[#112e51] mb-3">2. 掩盖不自信与没底气</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              怕镇不住人、怕下属不服、怕暴露专业不行、怕失去权威。很多高压领导内心其实很虚，只能用强硬外壳撑场面。
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-t-4 border-[#fdb81e]"
          >
            <h3 className="text-lg font-bold text-[#112e51] mb-3">3. 误将“管理”等同于“控制”</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              底层逻辑错误：认为员工不骂不动，不逼不出活。信奉“威=信，权力=威严”。同时，体系管控失败，官兵缺乏有效的申诉渠道。
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-t-4 border-[#00bde3]"
          >
            <h3 className="text-lg font-bold text-[#112e51] mb-3">4. 融入群体的压力</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              作为新任舰长，可能没有足够的时间去真正融入这个已经高度专业化的精英群体，因此临时采用了高压态势试图快速确立地位。
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  // Slide 6: Conclusion
  {
    id: 'conclusion',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-12 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#e31c3d]"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Award className="w-20 h-20 text-[#fdb81e] mx-auto" />
        </motion.div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-6"
        >
          后续影响与历史启示
        </motion.h2>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#ffffff] p-10 rounded-xl shadow-2xl max-w-4xl w-full text-left border-b-8 border-[#112e51]"
        >
          <h3 className="text-2xl font-bold text-[#112e51] mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-[#e31c3d]" />
            海军领导力转型的催化剂
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            该案例直接影响了后续<strong>“领导者-领导者” (Leader-Leader)</strong> 模式的发展（如大卫·马凯特在圣塔菲号上的变革实践）。
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#fdb81e]">
            <h4 className="font-bold text-[#112e51] mb-2 text-xl">核心铁律：</h4>
            <p className="text-gray-800 text-lg">
              即使在技术性能完美的组织中，<strong>有毒的领导力也会被视为作战风险而被清除。</strong>
            </p>
            <p className="text-[#e31c3d] font-bold mt-4 text-xl">
              “在核反应堆和核武器并存的密闭空间里，心理安全与物理安全同等重要。”
            </p>
          </div>
        </motion.div>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#112e51] text-white overflow-hidden flex flex-col font-sans selection:bg-[#fdb81e]/30">
      {/* Main Presentation Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <footer className="h-16 border-t border-[#0a1c32] bg-[#0a1c32] flex items-center justify-between px-6 z-10">
        <div className="text-gray-300 text-sm font-medium flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#e31c3d] mr-2"></span>
          《领导与沟通》案例分析 - 佛罗里达号
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-[#112e51] text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-[#fdb81e] text-sm font-bold tracking-widest">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full hover:bg-[#112e51] text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
}
