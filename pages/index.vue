<template>
  <div>
    <div v-if="$i18n.locale === 'en'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <h3>
                  Academy Without Borders
                </h3>
                <p>
                  Öncü Academy was founded by a group of scholars and professionals who are deeply passionate about education and committed to lifelong learning. Drawing on their extensive experience and expertise, they sought to create a new approach to teaching and learning that could truly transform lives.
                </p>
                <p>
                  We believe that everyone deserves access to knowledge and personal growth, which is why we've built a comprehensive learning framework and tailored executive education programs designed to break down barriers and cultivate a culture of lifelong learning.
                </p>
                <p>
                  We recognize that everyone learns differently, and we are committed to providing personalized and inclusive learning experiences that meet the unique needs of each individual.
                </p>
                <p>
                  Through our innovative programs, modules, and courses, we seek to pioneer new frontiers in learning, equipping individuals, professionals, organizations, and communities with the knowledge and skills they need to achieve their goals. By fostering a culture of lifelong learning, we aim to create positive change and make a lasting impact on the world.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/hero.png" alt="">
          </div>
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'eye']" class="h-4 mr-2 text-oncured-500" /><strong>Vision.</strong>
                      <p>We will be an academy that serves as a beacon of hope and inspiration for all who seek to grow, develop, and succeed. An academy that values diversity, equity, and inclusion and empowers learners to pursue their passions and interests with confidence and enthusiasm.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'trophy']" class="h-4 mr-2 text-oncured-500" /><strong>Values.</strong>
                      <ul>
                        <li><strong>Respect for human dignity: </strong>We treat all individuals with dignity and respect, regardless of their background, race, religion, gender, or sexual orientation.</li>
                        <li><strong>Responsibility:</strong> We are responsible for our actions and their consequences. We act ethically and take responsibility for our decisions and their impact on others.</li>
                        <li><strong>Honesty:</strong> We are honest and truthful in our dealings with others, whether in professional or personal relationships.</li>
                        <li><strong>Fairness:</strong> We strive for fairness and justice in our interactions with others, and work to eliminate discrimination and bias in all forms.</li>
                        <li><strong>Compassion:</strong> We show compassion and empathy towards others, and work to help those in need.</li>
                      </ul>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'lightbulb']" class="h-4 mr-2 text-oncured-500" /><strong>Knowledge Creation and Sharing</strong>
                      <p>At Öncü Academy, we believe in a dynamic and evolving approach to knowledge that emphasizes collaboration, innovation, and critical thinking. We view knowledge as a constantly changing and expanding realm, one that requires ongoing curiosity, exploration, and reflection. Our learning practice rests on the firm belief that knowledge is not just a product, but a process of discovery and inquiry that involves diverse perspectives and experiences. As such, we strive to create a learning environment that fosters intellectual openness, inclusivity, and respect for different ways of knowing.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'graduation-cap']" class="h-4 mr-2 text-oncured-500" /><strong>Program Design and Pedagogical Approaches for Effective Learning</strong>
                      <p>We develop our learning programs based on interdisciplinary interests and needs, drawing from various fields such as business and management studies, political economy, social theory, cultural studies, history, philosophy, computing science, urban studies, finance and economics.</p>
                      <p>Our classroom and online teaching methods are centered on active learning and critical thinking, which involves encouraging participants to think deeply and critically about the subject matter at hand. We employ a range of techniques such as case studies, group discussions, debates, problem-solving activities, and experiential learning to facilitate this process.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'users']" class="h-4 mr-2 text-oncured-500" /><strong>Who can benefit from Öncü Academy's learning programs?</strong>
                      <ul>
                        <li>Individuals seeking personal and professional development through a diverse and interdisciplinary approach to learning.</li>
                        <li>Small and large-sized enterprises seeking to enhance their executives' knowledge and skills, and drive growth and innovation within their organizations.</li>
                        <li>Non-profit organizations looking to increase their social impact through social entrepreneurship, and create positive change within their communities.</li>
                        <li>Government agencies and policymakers seeking evidence-based research and analysis to improve public policy and governance, and drive positive societal change.</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$i18n.locale === 'tr'">
      <div id="section-left" class="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div class="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <h3>
                  Sınırları Olmayan Akademi
                </h3>
                <p>
                  Öncü Akademi, öğrenmeye adanmış bir grup tutkulu akademisyen ve profesyonel tarafından kuruldu. Bu insanlar, kapsamlı deneyim ve uzmanlıklarından güç alarak, öğretim ve öğrenme konusunda yeni bir yaklaşım yaratmak için bir araya geldiler.
                </p>
                <p>
                  Akademinin amacı, insanları gerçekten dönüştürebilecek bir eğitim sunmak ve öğrenenlerin yeni ufuklar keşfetmelerine yardımcı olmaktır. Akademi, yaşam boyu öğrenmenin önemini vurgulayan ve öğrenenlerin kendilerini sürekli olarak geliştirmelerini teşvik eden bir öğrenme felsefesi ve modeli benimsemektedir.
                </p>
                <p>
                  Her bireyin bilgiye ve kişisel gelişime erişim hakkına sahip olduğu inancıyla, yaşam boyu öğrenme kültürünün geliştirilmesine ve bilgiye ulaşmanın önündeki engellerin kaldırılmasına odaklanmaktadır. Bu açıdan,  öncelikli olarak yönetici gelişim programları tasarlamaktadır.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1 p-12 -mt-4 lg:-ml-4 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:object-cover">
            <img class="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/hero.png" alt="">
          </div>
          <div class="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'eye']" class="h-4 mr-2 text-oncured-500" /><strong>Vizyon.</strong>
                      <p>Büyümek, gelişmek ve başarılı olmak isteyenlerin umut ve ilham kaynağı olacak bir akademi olacağız. Farklılığı, eşitliği ve kapsayıcılığı önemseyen, öğrencilerini tutku ve hevesle ilgi alanlarına yönlendiren bir akademi olacağız.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'trophy']" class="h-4 mr-2 text-oncured-500" /><strong>Değerler.</strong>
                      <ul>
                        <li><strong>İnsan Onuruna Saygı: </strong>Geçmişi, ırkı, dini, cinsiyeti veya cinsel yönelimi ne olursa olsun, tüm bireylere insanlık onuruyla ve saygıyla yaklaşırız.</li>
                        <li><strong>Sorumluluk:</strong> Eylemlerimizin ve sonuçlarının sorumluluğunu alırız. Ahlaki davranır ve kararlarımızın başkaları üzerindeki etkisine karşı sorumluluk üstleniriz.</li>
                        <li><strong>Dürüstlük:</strong> İş ve kişisel ilişkilerimizde, dürüst ve doğru davranırız.</li>
                        <li><strong>Adil Olmak:</strong> Bütün ilişkilerimizde adalet ve eşitlik arayışına uygun hareket ederiz. Her türlü ayrımcılığı ve önyargıyı ortadan kaldırmak için çalışırız.</li>
                        <li><strong>Merhamet:</strong> İhtiyacı olanlara yardım etmek için merhamet ve duygudaşlık gösteririz.</li>
                      </ul>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'lightbulb']" class="h-4 mr-2 text-oncured-500" /><strong>Bilgi ve Öğreneme Yaklaşımı</strong>
                      <p>Öncü Akademi, işbirliklerine, yenilikçiliğe ve eleştirel düşünceye önem veren, dinamik ve gelişen bir bilgi ve bilme anlayışını ve pratiğini benimser. Bilgiyi sürekli değişen ve genişleyen bir alan olarak görür, sürekli merak, keşif ve düşünme gerektiren bir süreç olarak ele alır. Öğrenme yaklaşımı, bilginin sadece bir ürün değil, farklı perspektifler ve deneyimler içeren bir keşif ve sorgulama süreci olduğuna dair sağlam bir inanç üzerine oturur. Bu nedenle, farklı bilgi biçimlerine saygı duyar, zihinsel açıklığı ve kapsayıcılığı teşvik eden bir öğrenme ortamı yaratmaya çalışır.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'graduation-cap']" class="h-4 mr-2 text-oncured-500" /><strong>Program Tasarımı ve Etkili Öğrenme Pedagojisi</strong>
                      <p>Öncü Akademi’de, öğrenme programları disiplinlerarası ilgi ve ihtiyaçlara dayalı olarak geliştirilir ve işletme ve yönetim bilimleri, siyasal iktisat, sosyal teori, kültür çalışmaları, tarih, felsefe, bilgisayar bilimleri, kentsel çalışmalar, finans ve ekonomi gibi çeşitli alanlardan yararlanılır.</p>
                      <p>Sınıf ve çevrimiçi öğretim yöntemleri, aktif öğrenmeye ve eleştirel düşünmeye odaklanır. Katılımcıları işlenen konularla ilgili derin ve eleştirel düşünmeye teşvik etmek amacıyla vaka çalışmaları, grup tartışmaları, problem çözme etkinlikleri ve deneyimsel öğrenme gibi çeşitli teknikler kullanılır.</p>
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <span><font-awesome-icon :icon="['fas', 'users']" class="h-4 mr-2 text-oncured-500" /><strong>Öncü Akademi'nin Öğrenme Programlarından Kimler Faydalanabilir?</strong>
                      <ul>
                        <li>Çeşitli konularda ve disiplinler arası bir öğrenme yaklaşımı ile kişisel ve mesleki gelişim arayışında olan bireyler.</li>
                        <li>Yöneticilerin bilgi ve becerilerini artırmayı, kurumlarında büyümeyi ve yeniliği sağlamayı hedefleyen küçük ve büyük ölçekli işletmeler.</li>
                        <li>Sosyal girişimcilik yoluyla sosyal etkiyi artırmak, topluluklarında olumlu değişim yaratmak isteyen kar amacı gütmeyen kuruluşlar.</li>
                        <li>Kamu politikası ve yönetişimi iyileştirmek, olumlu toplumsal değişimi sağlamak için kanıta dayalı araştırmalar ve analizler arayan kamu kurumları ve karar alıcılar.</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      showModal: false,
      headTitle: this.$t('home') + ' | ' + this.$t('title'),
      headerTitle: '',
      headerParagraph: '',
      headerImage: ''
    }
  },
  head () {
    return {
      title: this.headTitle
    }
  },
  watch: {
    '$i18n.locale' (newVal, oldVal) {
      this.updateHeader()
    }
  },
  mounted () {
    this.updateHeader()
  },
  methods: {
    updateHeader () {
      const headerTitle =
        this.$i18n.locale === 'en'
          ? 'Öncü Academy'
          : 'Öncü Academy'
      const headerParagraph =
        this.$i18n.locale === 'en'
          ? 'We strive to foster a sense of curiosity and quest in our learners, encouraging them to push beyond the boundaries of what they know and discover new frontiers of knowledge.'
          : 'Sizleri, bildiklerinizi sorgulamaya, merakınızı özgürleştirmeye, kendinizi yeniden keşfetmeye davet ediyoruz.'
      const headerImage =
        this.$i18n.locale === 'en'
          ? '/images/hero.png'
          : '/images/hero.png'
      this.$nuxt.$emit('updateHeader', { headerTitle, headerParagraph, headerImage })
    }
  }
}
</script>
