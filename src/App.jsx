import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Users, MessageCircle, Zap, Check, ArrowRight, BookOpen, Target, Shield } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '少人数チーム制',
      description: '週1回60〜90分、3〜5人のチームで活動します。互いに刺激し合いながら、自分の意見を言語化する場です。'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '伴走型メンター',
      description: 'メンターは常駐せず、必要な時だけ介入します。答えを教えるのではなく、自走を守り、思考の壁打ち相手となります。'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AIファシリテーター',
      description: 'AIを「答えを出す機械」ではなく、「思考を深めるパートナー」として使う技術を身につけます。'
    }
  ];

  const useCases = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: '勉強での活用',
      description: '「分からない」で終わらせず、「何が分からないか」をAIと一緒に整理し、問いを立てる力を養います。'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: '人間関係での活用',
      description: '学校での出来事を言語化し、AIに「別の視点」を提示してもらうことで、客観的な解釈と落ち着いた行動を促します。'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: '家庭での活用',
      description: '親の仕事や背景をAIに整理してもらい、社会への理解を深めると同時に、親子の対話のきっかけを作ります。'
    }
  ];

  const concerns = [
    {
      number: '01',
      question: 'AIに任せきりになりませんか？',
      answer: 'AIは「答え」を出すためではなく、思考の「補助線」を引くために使います。自分で考えるためのヒントをもらう使い方を徹底します。'
    },
    {
      number: '02',
      question: '「教えない」というのは放任ですか？',
      answer: 'いいえ。放任ではなく、綿密な「設計」と「伴走」を行います。つまずいた時に手を引くのではなく、立ち上がり方を一緒に考える指導です。'
    },
    {
      number: '03',
      question: '安全性は大丈夫ですか？',
      answer: '家庭ごとのルール設定、使用範囲の限定、個人情報の扱い方について、入会時に詳細なガイドラインを共有し、安全な利用環境を整えます。'
    }
  ];

  const faqs = [
    { question: '授業料はいくらですか？', answer: '月額料金は15,000円（税込）です。入会金は別途10,000円となります。詳しくは体験会でご説明いたします。' },
    { question: '振替はできますか？', answer: 'はい、月1回まで振替が可能です。前日までにご連絡いただければ対応いたします。' },
    { question: 'パソコンは必要ですか？', answer: 'はい、タイピング練習のため、ノートパソコンをご持参いただきます。レンタルも可能です（別途料金）。' },
    { question: 'オンラインでの受講は可能ですか？', answer: '現在は対面のみですが、今後オンライン開催も検討しております。' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Poppins:wght@600;700;800&display=swap');
        
        * {
          font-family: 'Noto Sans JP', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Poppins', 'Noto Sans JP', sans-serif;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logoBase64} alt="VISIQ Academy" className="h-10" />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['concept', 'method', 'compatibility', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {section === 'concept' && '思想'}
                  {section === 'method' && '手法'}
                  {section === 'compatibility' && '向き不向き'}
                  {section === 'contact' && 'お問い合わせ'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['concept', 'method', 'compatibility', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  {section === 'concept' && '思想'}
                  {section === 'method' && '手法'}
                  {section === 'compatibility' && '向き不向き'}
                  {section === 'contact' && 'お問い合わせ'}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
              <span className="block text-gray-900">VISIQ Academyは</span>
              <span className="block gradient-text">勉強を教える場所ではありません。</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in-up stagger-1">
              子どもが自分で考え、選び、進めるための場所です。
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 animate-fade-in-up stagger-2">
              小学生のうちに<br className="md:hidden" />
              <span className="gradient-text">"一生使える学び方"</span>を身につける。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-3">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2"
              >
                無料AI体験会に参加する
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Evaluation Section */}
      <section id="concept" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            まずはAIに<span className="gradient-text">"第三者評価"</span>してもらってください
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            私たちの教育方針が本当に優れているか、AIに客観的に分析してもらうことを推奨しています。
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">VISIQ Academy 概要</h3>
              <p className="text-gray-700 leading-relaxed">
                VISIQ Academyは、小学生を対象にした教育プログラムです。目的は、テストの点数を短期的に上げることそのものではなく、子どもが自ら学び続ける力（自己学習力・思考力・習慣力）を育てることにあります。現代は、インターネットやAIを使えば知識そのものは誰でも手に入る時代です。一方で、小学校4年生前後から"言葉で考える力""抽象的に捉える力"が求められ、ここで学力差が広がりやすいと私たちは捉えています。VISIQ Academyはこの時期に"学びの土台"を設計します。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <button className="bg-white hover:bg-gray-50 rounded-lg px-6 py-4 text-left transition-all border-2 border-blue-200 hover:border-blue-400">
                <span className="text-sm font-semibold text-blue-600">推奨プロンプト</span>
                <p className="text-gray-800 mt-2">この方針のメリット・デメリットを箇条書きで教えて</p>
              </button>
              <button className="bg-white hover:bg-gray-50 rounded-lg px-6 py-4 text-left transition-all border-2 border-blue-200 hover:border-blue-400">
                <span className="text-sm font-semibold text-blue-600">推奨プロンプト</span>
                <p className="text-gray-800 mt-2">この教育に向く家庭／向かない家庭を具体化して</p>
              </button>
              <button className="bg-white hover:bg-gray-50 rounded-lg px-6 py-4 text-left transition-all border-2 border-blue-200 hover:border-blue-400">
                <span className="text-sm font-semibold text-blue-600">推奨プロンプト</span>
                <p className="text-gray-800 mt-2">"教えない教育"のリスクと対策を整理して</p>
              </button>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-8">
              ※AIの回答は参考情報であり、最終判断は体験会で納得して決められます。
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            VISIQが向いているご家庭、<br />向いていないご家庭
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            私たちは「全ての方に合う教育」だとは思っていません。<br />
            ミスマッチを防ぐため、事前にご確認ください。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Suitable Families */}
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">VISIQが向いているご家庭</h3>
              <ul className="space-y-4">
                {[
                  '子どもに"考える力"を身につけてほしい',
                  '点数より"学び続ける力"を大切にしたい',
                  'AIを禁止ではなく、正しく使わせたい',
                  '自立した学びを大切にしたい',
                  '長期的な成長を重視している'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable Families */}
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">向いていないご家庭</h3>
              <ul className="space-y-4">
                {[
                  'とにかく短期間で点数を上げたい',
                  '答えを教えてほしい',
                  '管理型・詰め込み型を求めている',
                  '学習の主導権は大人が持つべきだと考えている',
                  'AIの使用に強い抵抗感がある'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grade 4 Wall Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-blue-200 text-sm font-semibold mb-4 uppercase tracking-wider">なぜ小学生限定なのか</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            「小4の壁」を越えるための<br />抽象化と言語化。
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            小学校4年生前後から、学習内容は具体的から抽象的へと変化します。
            ここで求められるのは、単なる暗記ではなく「言葉で考える力」と「抽象的に捉える力」です。
            <br /><br />
            この時期に適切な学び方を身につけないと、学力差は広がる一方です。
            「中学からでは遅い」とは言いませんが、「小学生なら確実に間に合う」のです。
            VISIQは、この重要な時期に特化して、一生使える学びの土台を築きます。
          </p>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            VISIQのやり方
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            「授業」ではなく「作戦会議」。<br />
            自ら考え、行動するための仕組みがあります。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <p className="text-blue-600 text-sm font-semibold text-center mb-4 uppercase tracking-wider">思考のインターフェース</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            なぜ、入口が<span className="gradient-text">「タイピング」</span>なのか。
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            タイピングは練習科目ではありません。<br />
            思考を止めずに考え続けるための「思考のインターフェース」です。
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">思考を止めないために</h3>
                <p className="text-gray-700 leading-relaxed">
                  書く速度が思考の速度に追いつかないと、アイデアは消えてしまいます。
                  タイピングは、湧き出る思考をそのまま形にするための最良のツールです。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">言語化の速度を上げる</h3>
                <p className="text-gray-700 leading-relaxed">
                  速く打てることは、速く考えられることにつながります。
                  圧倒的な入力速度は、深い思考への入り口です。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⌨️</div>
                <p className="text-gray-700 font-medium">思考の速度で言語化する</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-12">
            ※音声入力も活用しますが、思考の整理と構造化の基礎としてタイピングを重視します。
          </p>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            AI活用の具体例
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="text-blue-600 mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            よくある不安への回答
          </h2>

          <div className="space-y-6">
            {concerns.map((concern, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-black text-blue-600 flex-shrink-0">
                    {concern.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{concern.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{concern.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            開催形式について
          </h2>
          
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">駅近レンタルスペースでの開催</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              立ち上げ期は、津田沼・船橋・市川・都内などの駅近レンタルスペースを利用して開催します。
              会場は「アクセス」「設備」「安全性」の厳しい基準を満たした場所のみを選定しています。
            </p>
            <p className="text-sm text-gray-600">
              ※将来的な常設拠点の設置は、会員数の増加に合わせて段階的に検討してまいります。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            まずは、保護者の方が<br />AIを体験してください。
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            子育て、仕事、手続きなど、日常の困りごとを題材に、<br />
            AIがどのように思考を整理してくれるかを体験していただきます。
          </p>
          <p className="text-2xl font-bold mb-12 text-white">
            お子さんが「自分で考え、自分で進める」姿を<br />
            初めて見る体験になるかもしれません。
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">体験会の内容</h3>
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              {[
                'VISIQの教育メソッドの詳細説明',
                '保護者向けAI活用ワークショップ',
                'お子様の現状と課題のヒアリング'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto">
            無料AI体験会に参加する
            <ArrowRight size={24} />
          </button>

          <p className="text-sm text-blue-200 mt-8">
            ※無理な勧誘は一切いたしません。安心してお越しください。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            よくある質問
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">VISIQ Academy</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              小学生のうちに一生使える学び方を。<br />
              AI時代を生き抜くための、思考と習慣の作戦会議。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4 text-lg">Menu</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('concept')} className="hover:text-white transition-colors">思想</button></li>
                <li><button onClick={() => scrollToSection('method')} className="hover:text-white transition-colors">手法</button></li>
                <li><button onClick={() => scrollToSection('compatibility')} className="hover:text-white transition-colors">向き不向き</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">お問い合わせ</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © 2026 VISIQ Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;