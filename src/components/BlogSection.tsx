import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const { language, t } = useLanguage();

  const articles = [
    {
      titleKey: 'articleTitle1',
      date: language === 'ar' ? '15 ديسمبر 2024' : 'December 15, 2024',
      excerpt: language === 'ar' 
        ? 'يبحث كل منزل عن أسلوب يجمع بين الراحة والجمال. في هذا المقال نستعرض أجمل اتجاهات التصميم الداخلي...'
        : 'Every home seeks a style that blends comfort and beauty. In this article, we explore the top interior design trends...',
      readTime: language === 'ar' ? '5 دقائق' : '5 min read'
    },
    {
      titleKey: 'articleTitle2',
      date: language === 'ar' ? '10 ديسمبر 2024' : 'December 10, 2024',
      excerpt: language === 'ar'
        ? 'الواجهة الخارجية للمنزل هي الانطباع الأول، لذلك اختيار التصميم المناسب أمر بالغ الأهمية...'
        : 'The exterior facade of your home is the first impression. Choosing the right design is essential...',
      readTime: language === 'ar' ? '7 دقائق' : '7 min read'
    }
  ];

  return (
    <section id="blog" className="section-premium py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('blogTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-bronze mx-auto"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="card-premium hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Article Header */}
              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>

              {/* Article Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {t(article.titleKey)}
              </h3>

              {/* Article Excerpt */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Read More Link */}
              <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                <span className="font-medium me-2">
                  {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                </span>
                {language === 'ar' ? 
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> :
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                }
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;