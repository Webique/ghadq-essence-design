import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink, Star, Sparkles, Home, Palette, Lightbulb } from 'lucide-react';

const OurWorkSection = () => {
  const { language } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: {
        ar: "تصميم خارجي لفلة في المملكة العربية السعودية",
        en: "Exterior Design for a Villa in Saudi Arabia"
      },
      subtitle: {
        ar: "واجهة تجمع بين الفخامة الكلاسيكية وروح الطبيعة الهادئة",
        en: "A facade that combines classic luxury with the spirit of serene nature"
      },
      description: {
        ar: "الأعمدة العالية مع التفاصيل المعمارية الأنيقة تعكس هيبة وفخامة الطراز الكلاسيكي، بينما تضفي النوافذ الكبيرة لمسة عصرية تسمح باندماج الداخل مع إطلالة الحديقة الخضراء. التنسيق الخارجي مع الممرات والزهور يضيف إحساسًا بالترحاب والدفء، ليجعل البيت تحفة متكاملة في قلب الطبيعة.",
        en: "The high columns with elegant architectural details reflect the prestige and luxury of the classic style, while the large windows add a modern touch that allows the interior to blend with the view of the green garden. The external landscaping with pathways and flowers adds a sense of welcome and warmth, making the house an integrated masterpiece in the heart of nature."
      },
      features: {
        ar: [
          "إبراز شخصية مميزة لكل واجهة",
          "التوازن بين الفخامة والعملية",
          "تفاصيل تزيد من جمال وقيمة العقار"
        ],
        en: [
          "Highlighting a distinctive character for each facade",
          "Balancing luxury with practicality",
          "Details that enhance the beauty and value of the property"
        ]
      },
      insight: {
        ar: "لأن الواجهة هي الانطباع الأول، نحن نصممها لتكون استثنائية",
        en: "Because the facade is the first impression, we design it to be exceptional"
      },
      images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'],
      category: {
        ar: "تصميم خارجي",
        en: "Exterior Design"
      },
      location: {
        ar: "المملكة العربية السعودية",
        en: "Saudi Arabia"
      }
    },
    {
      id: 2,
      title: {
        ar: "تصميم عصري يدمج الراحة مع الفخامة",
        en: "Modern Design that Combines Comfort with Luxury"
      },
      subtitle: {
        ar: "مجالس مفتوحة بأجواء مودرن راقية",
        en: "Open living areas with elegant modern atmospheres"
      },
      description: {
        ar: "تصميم عصري مبتكر يجمع بين الأناقة والفخامة، مع التركيز على المساحات المفتوحة التي تخلق أجواءً راقية ومريحة. المجالس المفتوحة تسمح بتدفق طبيعي للضوء والهواء، مما يخلق بيئة معيشية مثالية تجمع بين الجمال والوظيفة.",
        en: "An innovative modern design that combines elegance and luxury, with a focus on open spaces that create sophisticated and comfortable atmospheres. Open living areas allow natural flow of light and air, creating an ideal living environment that combines beauty and functionality."
      },
      features: {
        ar: [
          "مساحات مفتوحة ومتسعة",
          "أجواء مودرن راقية",
          "دمج الراحة مع الفخامة"
        ],
        en: [
          "Open and spacious areas",
          "Elegant modern atmospheres",
          "Combining comfort with luxury"
        ]
      },
      insight: {
        ar: "التصميم العصري يحول المساحات إلى أماكن تعيش فيها الأناقة",
        en: "Modern design transforms spaces into places where elegance lives"
      },
      images: ['7.webp'],
      category: {
        ar: "تصميم داخلي",
        en: "Interior Design"
      },
      location: {
        ar: "الرياض",
        en: "Riyadh"
      }
    },
    {
      id: 3,
      title: {
        ar: "دورة مياه مودرن تجمع بين الأناقة والراحة",
        en: "Modern Bathroom Combining Elegance and Comfort"
      },
      subtitle: {
        ar: "تصميم عصري يلهم الاسترخاء والهدوء",
        en: "Modern design that inspires relaxation and tranquility"
      },
      description: {
        ar: "دورة مياه مودرن تجمع بين الأناقة والراحة، مع اختيار خامة بألوان من درجات البيجيات التي تضفي شعورًا بالدفء والسكينة. التصميم تميز باستخدام لوحة فنية تضيف لمسة شخصية ومميزة للمساحة، مع توزيع مثالي للعناصر لتوفير وظيفة عملية دون التنازل عن الجمال. خامات راقية وإضاءة مناسبة أكملت الطابع العصري، فكانت النتيجة دورة مياه أنيقة ومريحة تُلهم الاسترخاء.",
        en: "A modern bathroom that combines elegance and comfort, with material choices in beige tones that create a feeling of warmth and tranquility. The design is distinguished by the use of an artistic palette that adds a personal and distinctive touch to the space, with perfect distribution of elements to provide practical functionality without compromising beauty. Luxurious materials and appropriate lighting completed the modern character, resulting in an elegant and comfortable bathroom that inspires relaxation."
      },
      features: {
        ar: [
          "ألوان من درجات البيجيات للدفء والسكينة",
          "لوحة فنية تضيف لمسة شخصية ومميزة",
          "توزيع مثالي للعناصر مع الحفاظ على الجمال"
        ],
        en: [
          "Beige tones for warmth and tranquility",
          "Artistic palette adding personal and distinctive touch",
          "Perfect distribution of elements while maintaining beauty"
        ]
      },
      insight: {
        ar: "الراحة والأناقة يمكن أن تتعايشا في كل مساحة",
        en: "Comfort and elegance can coexist in every space"
      },
      images: ['8.webp', '9.webp'],
      category: {
        ar: "تصميم داخلي",
        en: "Interior Design"
      },
      location: {
        ar: "الرياض",
        en: "Riyadh"
      }
    },
    {
      id: 4,
      title: {
        ar: "غرفة مودرن مصممة خصيصًا لشابة",
        en: "Modern Bedroom Designed Specifically for a Young Woman"
      },
      subtitle: {
        ar: "مجلس أرضي مودرن يجمع الراحة بالأناقة",
        en: "Modern ground floor living area combining comfort with elegance"
      },
      description: {
        ar: "غرفة مودرن مصممة خصيصًا لشابة، مع استغلال ذكي لكل سنتيمتر رغم صغر المساحة. تحتوي على دولاب عملي ومكتب أنيق، مع اختيار ألوان هادئة وعصرية تعكس الحيوية والشخصية المميزة لصاحبة الغرفة. التصميم يجمع بين الراحة والجمال، ويتيح مساحة كافية للحركة وتنظيم الأغراض بشكل مرتب وأنيق. مجلس أرضي مودرن يجمع الراحة بالأناقة، بتفاصيل عصرية ولمسة دافئة لكل اجتماع.",
        en: "A modern bedroom designed specifically for a young woman, with smart utilization of every centimeter despite the small space. It contains a practical wardrobe and an elegant desk, with the choice of calm and modern colors that reflect the vitality and distinctive personality of the room's owner. The design combines comfort and beauty, and provides sufficient space for movement and organizing belongings in an orderly and elegant manner. A modern ground floor living area combining comfort with elegance, with modern details and a warm touch for every gathering."
      },
      features: {
        ar: [
          "استغلال ذكي لكل سنتيمتر رغم صغر المساحة",
          "دولاب عملي ومكتب أنيق",
          "ألوان هادئة وعصرية تعكس الحيوية والشخصية"
        ],
        en: [
          "Smart utilization of every centimeter despite small space",
          "Practical wardrobe and elegant desk",
          "Calm and modern colors reflecting vitality and personality"
        ]
      },
      insight: {
        ar: "التصميم الذكي يحول المساحات الصغيرة إلى أماكن كبيرة في الوظيفة والجمال",
        en: "Smart design transforms small spaces into large places in function and beauty"
      },
      images: ['10.webp', '11.webp'],
      category: {
        ar: "تصميم داخلي",
        en: "Interior Design"
      },
      location: {
        ar: "الرياض",
        en: "Riyadh"
      }
    },
    {
      id: 5,
      title: {
        ar: "تصميم شركة متكاملة بمكاتب الموظفين",
        en: "Complete Company Design with Employee Offices"
      },
      subtitle: {
        ar: "مكتب المدير وغرفة الاجتماعات بتوزيع ذكي",
        en: "Manager's office and meeting room with smart distribution"
      },
      description: {
        ar: "تصميم شركة متكاملة بمكاتب الموظفين، مكتب المدير، وغرفة الاجتماعات، بتوزيع ذكي وألوان عصرية توفر بيئة عمل مريحة وعصرية. التصميم يركز على خلق مساحات وظيفية تعزز الإنتاجية والإبداع، مع الحفاظ على الأناقة والفخامة التي تعكس هوية الشركة المهنية.",
        en: "Complete company design with employee offices, manager's office, and meeting room, featuring smart distribution and modern colors that provide a comfortable and contemporary work environment. The design focuses on creating functional spaces that enhance productivity and creativity, while maintaining the elegance and luxury that reflect the company's professional identity."
      },
      features: {
        ar: [
          "توزيع ذكي للمساحات والوظائف",
          "ألوان عصرية توفر بيئة عمل مريحة",
          "مكاتب الموظفين ومكتب المدير وغرفة الاجتماعات"
        ],
        en: [
          "Smart distribution of spaces and functions",
          "Modern colors providing comfortable work environment",
          "Employee offices, manager's office, and meeting room"
        ]
      },
      insight: {
        ar: "بيئة العمل الجيدة هي أساس النجاح والإبداع في أي شركة",
        en: "A good work environment is the foundation of success and creativity in any company"
      },
      images: ['12.webp', '13.webp', '14.webp', '15.webp'],
      category: {
        ar: "تصميم تجاري",
        en: "Commercial Design"
      },
      location: {
        ar: "الرياض",
        en: "Riyadh"
      }
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="our-work" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'أعمالنا المميزة' : 'Our Distinguished Work'}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'ar' ? 'معرض أعمالنا' : 'Our Work Gallery'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'اكتشف مجموعة من مشاريعنا المميزة التي تجمع بين الإبداع والجودة والفخامة'
              : 'Discover a collection of our distinguished projects that combine creativity, quality, and luxury'
            }
          </p>
        </div>

        {/* Project Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Images */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4">
                <div className="grid grid-cols-2 gap-3">
                  {currentProjectData.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl aspect-square">
                      <img
                        src={`/src/assets/${image}`}
                        alt={`Project ${currentProject + 1} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-12 text-primary" />
                </button>
              </div>
              
              {/* Project Counter */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                {language === 'ar' ? 'مشروع' : 'Project'} {currentProject + 1} / {projects.length}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              {/* Project Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {currentProjectData.category[language]}
                  </div>
                  <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {currentProjectData.location[language]}
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  {currentProjectData.title[language]}
                </h3>
                
                <p className="text-xl text-primary font-medium">
                  {currentProjectData.subtitle[language]}
                </p>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentProjectData.description[language]}
                </p>
                
                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    {language === 'ar' ? 'تصميمنا يركز على:' : 'Our design focuses on:'}
                  </h4>
                  <ul className="space-y-3">
                    {currentProjectData.features[language].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insight */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium italic">
                      {currentProjectData.insight[language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 text-center">
                <button className="btn-hero group w-full md:w-auto">
                  {language === 'ar' ? 'عرض المزيد من الأعمال' : 'View More Work'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-20">
          <div className="w-24 h-1 bg-gradient-bronze mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            {language === 'ar' 
              ? 'كل مشروع يحكي قصة فريدة من الإبداع والتميز'
              : 'Every project tells a unique story of creativity and excellence'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
