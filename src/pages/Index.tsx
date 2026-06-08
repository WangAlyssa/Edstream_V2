import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Zap, CheckCircle, Smartphone, ArrowRight, Clock, Shield } from "lucide-react";

// =========================================================
// 动画组件 1：模拟 Canvas 内部一键创建 Slack 式频道
// =========================================================
const ChannelCreationMockup = () => {
  const [step, setStep] = useState(0);
  const [channels, setChannels] = useState(["# 课程公告", "# 期末复习"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === 4) {
          // 重置状态
          setChannels(["# 课程公告", "# 期末复习"]);
          return 0;
        }
        if (prev === 2) {
          // 模拟成功输入并添加新频道
          setChannels(["# 课程公告", "# 期末复习", "# 小组项目-01 🟢"]);
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#1e1e2d] text-gray-300 rounded-xl shadow-2xl p-4 font-mono text-xs overflow-hidden border border-gray-700 relative h-64 flex">
      {/* 模拟左侧 Canvas / EdStream 导航栏 */}
      <div className="w-1/3 border-r border-gray-700 pr-3 flex flex-col justify-between">
        <div>
          <div className="text-white font-bold mb-4 flex items-center gap-1.5 text-[11px] text-orange-400">
            <MessageSquare className="h-3 w-3" /> EdStream Hub
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Canvas 课程频道</div>
          <div className="space-y-1.5">
            {channels.map((ch, idx) => (
              <div key={idx} className={`px-2 py-1 rounded transition-all duration-300 ${idx === channels.length - 1 && step >= 3 ? "bg-blue-600/30 text-white font-semibold" : "text-gray-400"}`}>
                {ch}
              </div>
            ))}
          </div>
        </div>
        <button className={`w-full py-1 text-center border rounded border-dashed text-[10px] transition-all flex items-center justify-center gap-1 ${step === 1 ? "bg-orange-500 text-white border-transparent scale-105" : "border-gray-600 text-gray-500"}`}>
          <span>+ 创建新频道</span>
        </button>
      </div>

      {/* 模拟右侧主聊天/交互区域 */}
      <div className="w-2/3 pl-3 flex flex-col justify-between relative">
        <div className="border-b border-gray-800 pb-2 mb-2 flex items-center justify-between">
          <span className="text-white font-bold">{step >= 3 ? "# 小组项目-01" : "# 课程公告"}</span>
          <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">Canvas 已同步</span>
        </div>

        {/* 动态步骤演示文字 */}
        <div className="flex-1 flex items-center justify-center text-center px-4">
          {step === 0 && <p className="text-gray-500 italic animate-pulse">准备就绪：主讲教师一键管理...</p>}
          {step === 1 && <p className="text-orange-400 font-semibold animate-bounce">1. 触发 Canvas 接口创建频道...</p>}
          {step === 2 && <p className="text-blue-400 font-semibold">2. 输入频道名称中: "小组项目-01"</p>}
          {step === 3 && <p className="text-green-400 font-semibold animate-pulse">3. 🎉 频道创建成功！全班无缝接入</p>}
          {step === 4 && <p className="text-gray-400">正在同步 Canvas 学生花名册权限...</p>}
        </div>

        {/* 虚拟鼠标光标 */}
        <div 
          className="absolute w-3 h-3 bg-white rounded-full border border-black pointer-events-none transition-all duration-1000 shadow-lg"
          style={{
            left: step === 1 ? "25%" : step === 2 ? "50%" : "85%",
            top: step === 1 ? "85%" : step === 2 ? "60%" : "20%",
            opacity: step === 4 ? 0 : 0.8,
            transform: step === 1 ? "scale(0.8)" : "scale(1)"
          }}
        />
      </div>
    </div>
  );
};

// =========================================================
// 动画组件 2：3D 翻转模拟智能审批（延期/缓考请求处理）
// =========================================================
const ExtensionApprovalMockup = () => {
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsApproved((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-64 [perspective:1000px] font-sans">
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isApproved ? "[transform:rotateY(180deg)]" : ""}`}>
        
        {/* 正面：待审批状态 */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-xl p-5 border-2 border-orange-200 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full flex items-center gap-1">
                <Clock className="h-3 w-3" /> 待处理请求
              </span>
              <span className="text-xs text-gray-400">作业 3 延期申请</span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">学生：张同学 (ID: 20260824)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 bg-gray-50 dark:bg-gray-700/50 p-2 rounded border border-gray-100 italic">
              "老师您好，由于突发胃肠炎就医，希望能申请将作业截止日期延后 24 小时，附就医证明..."
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              拒绝请求
            </button>
            <button className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-xs font-bold shadow-md transform scale-105 animate-pulse">
              一键批准 ⚡
            </button>
          </div>
        </div>

        {/* 反面：审批成功状态 */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-xl [transform:rotateY(180deg)] flex flex-col justify-between items-center text-center">
          <div className="my-auto space-y-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-xl">审批已送达！</h4>
            <p className="text-sm text-blue-100 max-w-xs">
              系统已自动更改该生在 Canvas 中的专属截止日期，并通过微信/Push实时通知学生。
            </p>
          </div>
          <div className="text-[10px] text-blue-200/60 uppercase tracking-wider">
            自动生成合规审计日志 • 100% 教师自主可控
          </div>
        </div>

      </div>
    </div>
  );
};

// =========================================================
// 主页面组件：Index
// =========================================================
const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* 左侧：文案与核心呼吁 */}
            <div className="text-left space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold tracking-wide">
                🎨 专为高校打造的智能教学社群生态
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-600 dark:text-blue-300 leading-tight">
                Cultivating Campus <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Communities
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                连接 · 沟通 · 协同。 <br />
                一切无缝内置于 Canvas 内部。
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                EdStream 是一款深度嵌入 Canvas LMS 的全集成实时群聊与学术协同工具。拒绝混乱零散的邮件流与死板的传统讨论版，将类似 Slack 的高效沟通与自动化的教学教务流程完美融入师生日常。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full sm:w-52"
                  asChild
                >
                  <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    申请接入 EdStream <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* 移动端真实上架下载徽章 */}
              <div className="flex items-center gap-4 pt-6 opacity-85 hover:opacity-100 transition-opacity">
                <a href="https://apps.apple.com/us/app/edstream/id6736952355" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.edstreamchat.app" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-14 object-contain -my-2" />
                </a>
              </div>
            </div>

            {/* 右侧：用动态前端交互 Mockup 代替无聊的图片 */}
            <div className="relative space-y-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-orange-400/10 rounded-2xl blur-3xl -z-10" />
              <ChannelCreationMockup />
              <ExtensionApprovalMockup />
            </div>

          </div>
        </div>
      </section>

      {/* 痛点比对 Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">为什么高校沟通总是充满断层？</h2>
            <p className="text-gray-500 text-base">目前师生在传统 Canvas 和日常沟通中普遍面临的零散困境：</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "传统 Canvas 收件箱与课程割裂，容易漏看重要通知",
              "各大课程讨论版犹如“水贴”，师生难以维持实时即时问答",
              "无数作业延期、病假缓考申请散落在庞杂的日常邮件堆里",
              "师生缺乏统一的答疑与 Office Hours 预约和在线协作平台",
              "学生被迫在校外组建混乱的临时社交群，存在隐私和数据合规风险",
              "助教和老师需要耗费大量时间，重复手动梳理各种教务沟通文档"
            ].map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500 bg-white dark:bg-gray-800 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心产品功能 Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">核心模块，精简归一</h2>
            <p className="text-gray-500 text-base">不做臃肿的拼凑，只做对现代化高校教学最实用的功能。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">内置式即时学术沙龙</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  学生无需切换到第三方软件，直接在 Canvas 侧边栏进入专属实时沟通频道，支持代码高亮、多媒体文档分享和作业主题线索聚合。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Zap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">自动化特殊教务流审批</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  作业延期、缓考等特殊申请实现表单式线上收录。教师在面板一键准允后，系统自动同步修改 Canvas 中的对应节点，大幅削减行政开销。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Canvas LTI 深度权限互通</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  完美基于标准 LTI 协议进行身份鉴权。无需师生重新注册或管理新密码，自动读取班级成员名册，完美保障教学边界与合规性。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Smartphone className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">全功能原生双端移动 App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  全面支持 iOS 和 Android 原生系统，确保师生在外出、通勤时也能通过安全的 Push 通知接收关键教务通答疑答复，不错过任何学术动态。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 信任与安全保障 Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300">安全、合规、稳健的学术生态系统</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-2">
              <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-base">符合 FERPA 联邦隐私规范</h4>
              <p className="text-xs text-gray-500">所有涉及学生的教学记录、聊天文件和审批数据均实施端到端加密存储，杜绝校外第三方非法获取。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-2">
              <CheckCircle className="h-8 w-8 text-orange-500 mx-auto" />
              <h4 className="font-bold text-base">教师绝对控制与管理权</h4>
              <p className="text-xs text-gray-500">提供完整的内容行为审计日志，教师可根据需要随时开启或关闭指定社群频道，完全服务于教学实体。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动呼吁 CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">即刻为您的课程注入即时沟通活力</h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            加入学术数字化沟通重构行列，让学生的课程参与率与老师的沟通效率得到双重跨越。
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all"
              asChild
            >
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                立即申请 Pilot 试点计划
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;