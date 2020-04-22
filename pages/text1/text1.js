// pages/text1/text1.js
const wxParse = require("../../wxParse/wxParse.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var h5content = '<p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">白天遍览风光秀丽的莲花山、古色古香的宝墨园、一步一景的余荫山房；到长隆旅游度假区找寻快乐、到广东科学中心感受科技魅力、到紫泥堂创意园感受文创情怀；晚上入住环境舒适、设施齐全的长隆酒店、熊猫酒店或者是承载几代番禺人回忆的番禺宾馆、番禺大厦；饿了品尝石楼钵仔禾虫、化龙煎焗白鸽鱼、石碁八宝霸王鸭、市桥煎酿鲮鱼、沙湾水牛奶炖全鸡等特色本地美食；要想购物，四通八达的交通线路能带你直达番禺万达广场、奥园广场、海印又一城、永旺梦乐城、易发步行街吃、住、行、购、玩、乐……在广州番禺，游客能够轻松享受到一条龙的优质服务。</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560510733231066034.jpg" alt="微信图片_20190515193754.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560510733231066034.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">岭南印象园</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">坐拥8个国家A级景区，番禺区将完善旅游供给体系作为发展旅游业的重要着力点来抓，通过不断深化旅游供给侧结构性改革，加快推进旅游业转型升级，大力促进旅游优质发展，全力创建国家全域旅游示范区。&nbsp;&nbsp;</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">自2016年10月入选为“国家全域旅游示范区”创建单位以来，通过历时两年半的创建，如今的番禺城市管理更规范，市容市貌更美丽，环境卫生更整洁，基础设施更完善，配套服务更到位，旅游产品更丰富，产业发展更全面。2017年和2018年，番禺均有3个景区入选全省十佳综合好评景区。&nbsp;&nbsp;</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">量多质优</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">全省十佳景区3个在番禺</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">今年“5.19旅游日”，国家AAAA级旅游景区——番禺宝墨园又增加了不少“看头”。这个集清官文化、岭南园艺、岭南古建筑、珠三角水乡特色、古今艺术精品于一体的景区，原本各类雕塑精品就已经琳琅满目。</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">如今，针对岭南建筑、园林艺术、馆藏文化，宝墨园再次进行了全面的优化升级，增设了多个新景点、展馆——壁照红云、松映碧波、福寿有余、古枫盘云和敦煌壁画馆等，园区面貌焕然一新。景区还倾情打造张大千敦煌壁画馆，展出30余幅珍贵的张大千临摹敦煌佛像、飞天、乐舞伎壁画，以增强中西文明之交融、南北艺术之互通。</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">根据广东省景区行业协会发布的大数据报告，宝墨园2018年连续三个季度（第二、三、四季度）蝉联游客满意度最高前10名景区榜首，广州市旅游局发文号召全市旅游行业向宝墨园等景区学习。不断改善旅游体验，是这个景区屡创佳绩的法宝。&nbsp;&nbsp;</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560510807853057088.png" alt="宝墨园3.png" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560510807853057088.png"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">宝墨园园景醉人</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">宝墨园正是番禺区众多优质旅游景区的代表之一。番禺之所以能成为广州市唯一入选“国家全域旅游示范区”创建单位的行政区，与其得天独厚的基础及优势密不可分。</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">番禺现有国家A级景区8个，包含首批5A级景区1个（长隆旅游度假区）、4A级旅游景区5个（莲花山旅游区、宝墨园、广东科学中心、岭南印象园和沙湾古镇）、3A级旅游景区2个（永华艺术馆和广州渔人码头多彩小镇），其中2017年和2018年均有3个景区入选全省十佳综合好评景区，还有国家级文物保护单位3处、中国历史文化名镇和中国历史文化名村各1个（沙湾镇和大岭村）。&nbsp;&nbsp;</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">经过多年发展，目前番禺旅游已呈现出景区景点量多质优、旅游片区集聚发展、产业体系不断完善的良好态势，发展全域旅游正当其时。</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560507974138082446.jpg" alt="微信图片_20190516151222.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560507974138082446.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">沙湾古镇古建筑</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑,Microsoft YaHei;">声名远播</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">“味在番禺”美食品牌名扬海内外</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">在刚刚结束的广州亚洲美食节，番禺沙湾美食再次走红。低调的沙湾古镇，因美食而高调。在美食展上，作为番禺沙湾正宗的姜埋奶老字号沁芳园，它的创始人曾惠庄带着双皮奶、姜埋奶、奶箱子等水牛奶甜品到场，受到了现场吃货们的好评。不仅仅是沙湾美食，石楼钵仔禾虫、化龙煎焗白鸽鱼、石碁八宝霸王鸭、市桥煎酿鲮鱼……作为粤菜发祥地之一，番禺到处都是特色美食，想一想都让人口水直流。</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560508150235071175.jpg" alt="d9a7872211481d800c6ff36e9ea726b_副本.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560508150235071175.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">各类美食</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">著名美食家蔡澜对番禺美食也情有独钟，为番禺厨品的创意、食材、制作和味道叫好，称是“涨姿势”“新发现”。<span style="text-indent: 2em; font-family: 微软雅黑,Microsoft YaHei;">“食在广州、味在番禺”，餐饮业已成为番禺的传统优势产业。通过深挖本土美食文化特色，打造美食集聚区，提升餐饮业服务水平，拍摄“味在番禺”宣传片，成功举办7届广州国际美食节等，打造番禺美食品牌。</span></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">2018年美食节融入粤港澳大湾区元素，突出粤港澳大湾区及岭南美食特色，受到广大市民的好评，入场总人数近100万人次、消费总额超1.7亿元。番禺美食名扬海内外。</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;<img title="1560510676537088540.jpg" alt="熊猫酒店.webp.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560510676537088540.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">长隆熊猫酒店熊猫自助餐厅</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">除了让游客吃得开心，番禺的特色酒店也同样大受欢迎，让游客住得安心。作为番禺的老牌星级饭店，番禺宾馆荣获中国饭店协会“2018年度国际饭店业十佳精细化管理饭店”称号。<span style="text-indent: 2em; font-family: 微软雅黑,Microsoft YaHei;">除不断优化星级饭店服务和管理外，以长隆酒店、长隆熊猫酒店为代表的特色酒店，也受到广大游客的欢迎。广州长隆酒店连续10年荣获TTG颁发的“中国最佳主题酒店”大奖等。&nbsp;&nbsp;</span></span></p><p style="text-align: justify; text-indent: 2em;"><span style="color: rgb(192, 0, 0); font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">底蕴深厚</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="color: rgb(192, 0, 0); font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">番禺文旅融合发展受欢迎</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">时下文旅融合发展在全国如火如荼地开展中，番禺在此方面亦不逞多让。番禺是岭南文化重要发源地、广东音乐之乡、岭南画派发源地，拥有余荫山房、留耕堂等513处历史文化古迹，孕育了荣获中国民间艺术最高奖“山花奖”的鳌鱼舞、飘色、乞巧、醒狮等民间艺术，拥有广彩等非物质文化遗产。&nbsp;&nbsp;</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560510644154077832.jpg" alt="水上飘色.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560510644154077832.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">水上飘色</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">近年来，番禺更推出了一个又一个特色文化节日，引得一众游客纷纷前来品味美景、感受文化。<span style="text-indent: 2em; font-family: 微软雅黑,Microsoft YaHei;">如：将岭南飘色与番禺水乡文化相结合的宝墨园岭南水色旅游文化节，使岭南水色由原来的“色在船上飘”进化成“色在水中飘”；能在秀丽山水间独揽世界各地珍稀睡莲的莲花山莲花旅游文化节，领略各式莲花清丽雅致、色彩明媚，伫立水中竞放芳华的光景；集中展示番禺多彩民俗文化的沙湾古镇民俗文化节，为市民奉上一场精彩绝伦的民俗文化盛宴；每年11月-12月广州国际美食节如期而至，吸引了海内外数百万游客到场参加，打响番禺粤港澳美食旅游品牌。&nbsp;&nbsp;</span></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">番禺的文创产品更是引领旅游特色购物潮流。在广州长隆，文旅产品创意研发、动漫演艺开发、文旅产业设计等方面实践丰富，其自主研发的卡卡虎、熊猫三宝、海洋小精灵等动漫IP深入人心。在沙湾古镇、余荫山房等景区的文创产品也深受游客欢迎和喜爱。&nbsp;&nbsp;</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560510612023003227.jpg" alt="长隆旅游度假区活动演出.jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560510612023003227.jpg"/></span></p><p style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 112, 192); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 14px;">长隆旅游度假区活动演出</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">值得一提的是，番禺休闲娱乐体系也十分完善，以长隆大马戏为代表的夜游项目知名度高，影响力大。长隆国际大马戏拥有世界最大的实景式舞台，来自20多个国家，横跨亚洲、欧洲、美洲、非洲共300余名的马戏精英同台演绎，还有多达40余种500多只珍奇动物同台献技，是全球出演人数和动物最多的马戏表演。长隆大马戏表演场能容纳近7000名观众同时观看，每天晚上7点半上演，目前演出已经超过5000场。&nbsp;</span></p><p style="text-align: justify; text-indent: 2em;"><span style="color: rgb(192, 0, 0); font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">一条龙服务</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="color: rgb(192, 0, 0); font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><strong><span style="color: rgb(192, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">旅游接待总人数逐年攀升</span></strong></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">番禺全区旅游接待总人数逐年攀升，旅游总收入连续10年保持两位数增长，更于去年突破接待总人数4500万人次大关，旅游总收入达512亿元。为何越来越多的人选择番禺作为旅游目的地？这与番禺得天独厚的区位优势和便利的交通条件是分不开的。&nbsp;&nbsp;</span></p><p style="text-align: center; text-indent: 0em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img title="1560508850515036327.jpg" alt="640.webp (1).jpg" src="http://wmpy.net.cn/attachment/cms//image/20190614/1560508850515036327.jpg"/></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">番禺是粤港澳大湾区重要交通枢纽，拥有全国客流量最大的高铁站——广州南站，汇集了包括广深港高铁在内的5条高铁线路、3条城际轨道、5条城市轨道，去年到发旅客已达1.63亿人次。区内高铁网、轨道网、高快速网和骨干路网密集，目前连接珠江东西岸城市的南沙大桥正式开通，更利于外来游客来访。</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">“现在来番禺十分方便，从深圳坐高铁过来也不过几十分钟，就像坐地铁一样。”一名来自深圳的游客说。&nbsp;&nbsp;</span><span style="text-indent: 2em; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">交通方便之余，无论外来游客还是本地市民，在番禺都能享受到吃、住、行、购、玩、乐一条龙服务。</span></span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">番禺商贸发达，广州国际科技创新城、番禺汽车城、万博商务区、广州南站商务区四大产业平台特色鲜明，拥有万达广场、永旺梦乐、祈福缤纷世界、奥园广场等大型商业综合体，各类星级酒店和特色酒店、特色美食餐饮食肆星罗棋布，而且还是全国最大的珠宝首饰生产制造基地，灯光音响龙头企业集聚，红木家具蜚声国内外。&nbsp;&nbsp;</span></p><p style="text-align: justify; text-indent: 2em;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">无论想感受自然风光还是人文风情，想体验刺激游戏还是科学教育，想感受文创魅力还是商旅服务，在番禺统统都能得到满足。如今的番禺已成为了一个集岭南文化、现代旅游、生态休闲、时尚购物于一体的多功能旅游目的地。</span></p><p style="text-align: right;"><span style="font-family: 微软雅黑,Microsoft YaHei; font-size: 16px;">（番禺文明办 广州番禺发布）</span></p>'
    // var h5content = "<h1>h1内容</h1><h2>h2内容</h2><h3>h3内容</h3>"
    wxParse.wxParse("article1", "html", h5content, this, 5)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})