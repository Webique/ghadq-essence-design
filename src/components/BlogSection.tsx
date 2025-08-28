import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, Sparkles, Home, Palette, Lightbulb, Shield } from 'lucide-react';

const BlogSection = () => {
  const { language, t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: {
        ar: "أهم اتجاهات التصميم الداخلي",
        en: "Top Interior Design Trends"
      },
      excerpt: {
        ar: "يبحث كل منزل عن أسلوب يجمع بين الراحة والجمال. في هذا المقال نستعرض أجمل اتجاهات التصميم الداخلي، من الألوان الهادئة والتفاصيل الطبيعية، إلى حلول الإضاءة الذكية التي تحول أي مساحة إلى واحة أنيقة وعملية.",
        en: "Every home seeks a style that combines comfort and beauty. In this article, we explore the most beautiful interior design trends, from calm natural colors and details to smart lighting solutions that transform any space into an elegant and practical oasis."
      },
      keyPoints: {
        ar: [
          "ألوان طبيعية وهادئة للغرف المختلفة",
          "أثاث متعدد الاستخدامات يوفر المساحة",
          "دمج التكنولوجيا الذكية في المنازل",
          "الاهتمام بالتفاصيل الصغيرة مثل الإضاءة والإكسسوارات"
        ],
        en: [
          "Natural and calm colors for different rooms",
          "Multi-functional furniture that saves space",
          "Integrating smart technology in homes",
          "Attention to small details like lighting and accessories"
        ]
      },
      conclusion: {
        ar: "التصميم الداخلي الجيد يوازن بين الجمال والوظيفة ويجعل كل زاوية تحكي قصة. إذا كنت تبحث عن تجديد منزلك أو تصميم مساحة جديدة تعكس ذوقك الخاص، نحن هنا لمساعدتك في تحقيق ذلك.",
        en: "Good interior design balances beauty and function, making every corner tell a story. If you're looking to renovate your home or design a new space that reflects your personal taste, we're here to help you achieve that."
      },
      icon: Sparkles,
      color: "from-primary/20 to-primary/30"
    },
    {
      id: 2,
      title: {
        ar: "كيف تختار التصميم الخارجي المثالي لمنزلك",
        en: "How to Choose the Perfect Exterior Design for Your Home"
      },
      excerpt: {
        ar: "الواجهة الخارجية للمنزل هي الانطباع الأول، لذلك اختيار التصميم المناسب أمر بالغ الأهمية. هذا المقال يوضح أهم النصائح لاختيار تصميم خارجي يجمع بين الجمال والوظيفة.",
        en: "The exterior facade of a home is the first impression, so choosing the right design is crucial. This article explains the most important tips for choosing an exterior design that combines beauty and functionality."
      },
      keyPoints: {
        ar: [
          "اختيار مواد مقاومة للطقس وتدوم طويلاً",
          "تنسيق الحدائق والمساحات الخضراء بعناية",
          "تصميم الواجهات بما يتناسب مع أسلوب المنزل والمحيط",
          "الإضاءة الخارجية لزيادة الجمال والأمان"
        ],
        en: [
          "Choosing weather-resistant materials that last long",
          "Carefully arranging gardens and green spaces",
          "Designing facades that fit the home's style and surroundings",
          "External lighting to enhance beauty and security"
        ]
      },
      conclusion: {
        ar: "اختيار التصميم الخارجي المثالي يتطلب توازنًا بين الجمال، العملية، والاستدامة. إذا كنت تبحث عن تحويل واجهة منزلك إلى مساحة جذابة وعملية تعكس ذوقك، نحن هنا لنقدم لك الحلول الأمثل.",
        en: "Choosing the perfect exterior design requires a balance between beauty, practicality, and sustainability. If you're looking to transform your home's facade into an attractive and functional space that reflects your taste, we're here to provide you with the best solutions."
      },
      icon: Home,
      color: "from-primary/20 to-primary/30"
    }
  ];

  const features = [
    {
      icon: Palette,
      title: {
        ar: "التركيز على التفاصيل الصغيرة",
        en: "Focus on Small Details"
      },
      description: {
        ar: "التفاصيل هي ما تصنع الفرق بين التصميم الجيد والمميز. الإضاءة المناسبة، الإكسسوارات، الأعمال الفنية، وحتى اختيار الوسائد والسجاد يمكن أن يحول أي مساحة إلى مكان مليء بالأناقة والدفء.",
        en: "Details are what make the difference between good and exceptional design. Proper lighting, accessories, artwork, and even choosing cushions and carpets can transform any space into a place full of elegance and warmth."
      }
    },
    {
      icon: Lightbulb,
      title: {
        ar: "الإضاءة الذكية",
        en: "Smart Lighting"
      },
      description: {
        ar: "الإضاءة الخارجية لا تقتصر على الجانب الجمالي فقط، بل تعزز الأمان أيضًا. استخدام إضاءة مدروسة على الممرات وحول النباتات يبرز جمال التصميم في الليل.",
        en: "External lighting is not limited to aesthetics only, it also enhances security. Using thoughtful lighting on pathways and around plants highlights the beauty of the design at night."
      }
    },
    {
      icon: Shield,
      title: {
        ar: "المواد المستدامة",
        en: "Sustainable Materials"
      },
      description: {
        ar: "اختيار مواد تتحمل الطقس لفترات طويلة مثل الحجر الطبيعي والطوب. المواد عالية الجودة تضمن استدامة التصميم وقلة الحاجة للصيانة المستمرة.",
        en: "Choosing materials that withstand weather for long periods like natural stone and brick. High-quality materials ensure design sustainability and reduce the need for continuous maintenance."
      }
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'رؤى ووحي في التصميم' : 'Design Insights & Inspiration'}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'ar' ? 'أحدث مقالات التصميم' : 'Latest Design Articles'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'اكتشف أحدث الاتجاهات والنصائح في عالم التصميم الداخلي والخارجي'
              : 'Discover the latest trends and tips in the world of interior and exterior design'
            }
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <article key={post.id} className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Header */}
                <div className="p-8 text-center md:text-start">
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${post.color} text-primary mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{language === 'ar' ? '27 أغسطس 2025' : 'August 27, 2025'}</span>
                      <Clock className="w-4 h-4 mr-2 ml-4" />
                      <span>{language === 'ar' ? '5 دقائق قراءة' : '5 min read'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title[language]}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {post.excerpt[language]}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">
                      {language === 'ar' ? 'النقاط الرئيسية:' : 'Key Points:'}
                    </h4>
                    <ul className="space-y-2">
                      {post.keyPoints[language].map((point, index) => (
                        <li key={index} className="flex items-start justify-center md:justify-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conclusion */}
                  <p className="text-foreground leading-relaxed mb-6 font-medium">
                    {post.conclusion[language]}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </article>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary/70" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title[language]}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description[language]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'ar' 
                ? 'هل تريد المزيد من النصائح؟'
                : 'Want More Tips?'
              }
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'تواصل معنا اليوم لنحول أفكارك إلى واقع ملموس ونقدم لك أفضل حلول التصميم'
                : 'Contact us today to turn your ideas into reality and provide you with the best design solutions'
              }
            </p>
            <a 
              href="tel:+966534645312" 
              className="btn-hero inline-block"
            >
              {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;