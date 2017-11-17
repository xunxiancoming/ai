/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP TABLE IF EXISTS `ad`;
CREATE TABLE IF NOT EXISTS `ad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url_to` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告';

DELETE FROM `ad`;
/*!40000 ALTER TABLE `ad` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad` ENABLE KEYS */;

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `discription` text,
  `content` text NOT NULL,
  `clicks` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_article_user` (`user_id`),
  KEY `FK_article_category` (`category_id`),
  CONSTRAINT `FK_article_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_article_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='文章';

DELETE FROM `article`;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` (`id`, `user_id`, `category_id`, `title`, `discription`, `content`, `clicks`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 'Test', NULL, '<p>this is a paragraph for testing...<br></p>', 55, '2017-11-15 14:30:08', '2017-11-17 14:39:49'),
	(2, 1, 1, '测试标题', NULL, '<p>\n</p><div id="1" srcid="1599" tpl="se_com_default" data-click="{&quot;rsv_bdr&quot;:&quot;0&quot;,&quot;p5&quot;:1}"><h3><a data-click="{\n			\'F\':\'778317EA\',\n			\'F1\':\'9D73F1E4\',\n			\'F2\':\'4CA6DC6B\',\n			\'F3\':\'54E5343F\',\n			\'T\':\'1510836089\',\n						\'y\':\'357FF8EF\'\n			 \n									}" href="http://www.baidu.com/link?url=fMEWsuS4xmNMPEBYheXGksDFhilItoZujoBsoBBlHFE00tGWKxMPeh_HL1tzGXlS3bE6DCQTotk2Zsq67MIML_" target="_blank">[ <em>Laravel</em> 5.3 文档 ] 安全 —— <em>API认证</em>(Passport) – <em>Laravel</em>学院</a></h3><div><em>Laravel</em>学院致力于提供优质<em>Laravel</em>中文学习资源... <em>Laravel</em>通过传统的登录表单已经让用户<em>认证</em>变得很简单,但是<em>API</em>怎么办?<em>API</em>通常使用token进行<em>认证</em>并且在请求之间不维护se...</div><div><a target="_blank" href="http://www.baidu.com/link?url=fMEWsuS4xmNMPEBYheXGksDFhilItoZujoBsoBBlHFE00tGWKxMPeh_HL1tzGXlS3bE6DCQTotk2Zsq67MIML_"><b>laravel</b>academy.org/pos...&nbsp;</a><span><span></span></span>&nbsp;-&nbsp;<a data-click="{\'rsv_snapshot\':\'1\'}" href="http://cache.baiducontent.com/c?m=9d78d513d99d12ef0ba9c3201a16a6355b0f97624cc0a11f68a5e75fe5604c324172a4fb792d4a4295876b6672b25402b9b06536605d73e6c89edf1596ac925f72c872293241c7070fd412a4ca5125b67ad605b7&amp;p=8057c115d9c040ac44be9b7c4b7a86&amp;newp=8b2a9701c08007ef08e2977f0e5c97231610db2151d7d7116b82c825d7331b001c3bbfb423241a05d8ce7c6d04aa4b5feaf4357534072ba3dda5c91d9fb4c57479cc3177365c&amp;user=baidu&amp;fm=sc&amp;query=laravel+api%C8%CF%D6%A4&amp;qid=8ac9501f00006076&amp;p1=1" target="_blank">百度快照</a></div></div>\n											\n		\n						\n			\n		\n\n								\n\n		\n				\n														\n																																									<div id="2" srcid="1599" tpl="se_com_default" data-click="{&quot;rsv_bdr&quot;:&quot;0&quot;,&quot;p5&quot;:2}"><h3><a data-click="{\n			\'F\':\'778317EA\',\n			\'F1\':\'9D73F1E4\',\n			\'F2\':\'4CA6DC6E\',\n			\'F3\':\'54E5343F\',\n			\'T\':\'1510836089\',\n						\'y\':\'F7BFFDFF\'\n			 \n									}" href="http://www.baidu.com/link?url=bulRqHU69zpBe3xVlh3J3XqfV6LAGh37dVTSox9lem4CJeMNJCuTPuswNe6hgbgSrjeiWUsesO-QLxGXUqej-K" target="_blank"><em>Laravel</em> 5 中使用 JWT(Json Web Token) 实现基于<em>API</em>的用户<em>认证</em></a></h3><div><em>Laravel</em>学院致力于提供优质<em>Laravel</em>中文学习资源... 用户<em>认证</em>是Web应用的重要组成部分,基于<em>API</em>的用户<em>认证</em>有两个最佳解决方案 —— OAuth 2.0 和 JWT(JSON Web Token)。...</div><div><a target="_blank" href="http://www.baidu.com/link?url=bulRqHU69zpBe3xVlh3J3XqfV6LAGh37dVTSox9lem4CJeMNJCuTPuswNe6hgbgSrjeiWUsesO-QLxGXUqej-K"><b>laravel</b>academy.org/pos...&nbsp;</a><span><span></span></span>&nbsp;-&nbsp;<a data-click="{\'rsv_snapshot\':\'1\'}" href="http://cache.baiducontent.com/c?m=9d78d513d99d12ef0ba9c3201a16a6355b0f97624cc0a11f68a5e75fe5604c324172a4fb792d4a4295876b6672b25402b9b06536605d73e6c89edf1596ac925f72c872293241c7070fd21da9c95125b67ad605b7&amp;p=8f77d01393934eac59efd22d0214bb&amp;newp=8b2a97148dd516ff57ee957c47598a231610db2151d6d3156b82c825d7331b001c3bbfb423241a03d1c57c6306a4435aeef1307033012ba3dda5c91d9fb4c57479d97c2227&amp;user=baidu&amp;fm=sc&amp;query=laravel+api%C8%CF%D6%A4&amp;qid=8ac9501f00006076&amp;p1=2" target="_blank">百度快照</a></div></div>\n											\n		\n						\n			\n		\n\n								\n\n		\n				\n														\n																																									<div id="3" srcid="1599" tpl="se_com_default" data-click="{&quot;rsv_bdr&quot;:&quot;0&quot;,&quot;p5&quot;:3}"><h3><a data-click="{\n			\'F\':\'778317EA\',\n			\'F1\':\'9D73F1E4\',\n			\'F2\':\'4CA6DE6B\',\n			\'F3\':\'54E5343F\',\n			\'T\':\'1510836089\',\n						\'y\':\'F7BE79FF\'\n			 \n									}" href="http://www.baidu.com/link?url=iiawxjf6qz2SweM3TF-E4rpXARH1aIN1kG3tRcnIlYyACmZK8_TZz3zy234DgbH1h7due3X0xmiYnioFPSFqhq&amp;wd=&amp;eqid=8ac9501f00006076000000065a0d8779" target="_blank"><em>Laravel</em>5.4 <em>Api</em> Token<em>认证</em> - 个人文章 - SegmentFault</a></h3><div>/* // <em>API</em> token <em>认证</em>-【20170321】 window.axios.defaults.headers.common = { \'X-CSRF-TOKEN\': window.<em>Laravel</em>.csrfToken, \'X-Requested-With\': \'XMLHttp...</div><div><a target="_blank" href="http://www.baidu.com/link?url=iiawxjf6qz2SweM3TF-E4rpXARH1aIN1kG3tRcnIlYyACmZK8_TZz3zy234DgbH1h7due3X0xmiYnioFPSFqhq">https://segmentfault.com/a/119...&nbsp;</a><span><span></span></span>&nbsp;-&nbsp;<a data-click="{\'rsv_snapshot\':\'1\'}" href="http://cache.baiducontent.com/c?m=9d78d513d99d12ef0ba9c3201a16a6355b0f97624cc0a11f68a5e75fe5604c324172a4fb792d4a4295873d7000dc5441aba7632d605f66e3c88fd60ccabbe57972d73a676d1f854a10d11badc9442fc42a9658eeac&amp;p=9d769a47c78406ff57ee947d1747a5&amp;newp=882a9645d59912a05ab8d32c524d83231610db2151d4d7166b82c825d7331b001c3bbfb423241a03d9c27c6407af4e56edf03079320821a3dda5c91d9fb4c57479d2&amp;user=baidu&amp;fm=sc&amp;query=laravel+api%C8%CF%D6%A4&amp;qid=8ac9501f00006076&amp;p1=3" target="_blank">百度快照</a></div><div><span>为您推荐：</span><ahttps: www.baidu.com="" s?tn="baidu&amp;rsv_idx=1&amp;wd=laravel" api="" token&amp;rsv_crq="6&amp;bs=laravel" api认证"="" title="laravel api token" target="_blank">laravel api token<a href="https://www.baidu.com/s?tn=baidu&amp;rsv_idx=1&amp;wd=laravel5.4 api token&amp;rsv_crq=6&amp;bs=laravel api认证" title="laravel5.4 api token" target="_blank">laravel5.4 api token</a><a href="https://www.baidu.com/s?tn=baidu&amp;rsv_idx=1&amp;wd=laravel api接口开发&amp;rsv_crq=6&amp;bs=laravel api认证" title="laravel api接口开发" target="_blank">laravel api接口开发</a></ahttps:></div></div>', 0, '2017-11-16 13:20:14', '2017-11-16 13:20:14'),
	(3, 1, 1, '用户注册时，需生成一个api_token', NULL, '<p>\n</p>\n<pre><code><span>/**\n     * Create a new user instance after a valid registration.\n     *\n     * <span>@param</span>  array  $data\n     * <span>@return</span> User\n     */</span>\n    <span>protected</span> <span><span>function</span> <span>create</span><span>(array $data)</span>\n    </span>{\n        $user =  User::create([\n            <span>\'name\'</span>     =&gt; $data[<span>\'name\'</span>],\n            <span>\'email\'</span>    =&gt; $data[<span>\'email\'</span>],\n            <span>\'avatar\'</span>   =&gt; <span>\'/images/avatars/default.png\'</span>,\n            <span>\'phone\'</span>    =&gt; <span>\'\'</span>,\n            <span>\'confirmation_token\'</span> =&gt; str_random(<span>40</span>),\n            <span>\'password\'</span> =&gt; bcrypt($data[<span>\'password\'</span>]),\n            <span>\'api_token\'</span> =&gt; str_random(<span>60</span>),   <span>// api_token认证</span>\n        ]);\n\n        <span>$this</span>-&gt;sendVerifyEmailTo($user);\n\n        <span>return</span> $user;\n    }</code></pre>', 1, '2017-11-16 13:27:26', '2017-11-17 03:43:22'),
	(4, 1, 1, '经典美文', NULL, '<p>\n	<span>&nbsp; 红尘冷暖，岁月清浅，仓促间，遗落一地，如诗的句点，不甘愿，不决绝，掬一份刻骨的思念，系一根心的挂牵，在你回眸的瞬间，一抹兰轩的底色，悄然纳于心间，不问深浅，暖一世的欢颜。</span></p>\n<p>\n	----------<span>题记</span></p>\n<p>\n	<span>&nbsp; 近来，有丝丝倦怠，铺天盖地的不肯离开，执笔，画圈，一闪而过的念，总是一而再，再而三的被搁浅，那些不情不愿的小情绪，占领了太多的空间，庸庸碌碌中，任光阴无情的在指缝中删删减减。</span></p>', 0, '2017-11-16 13:28:28', '2017-11-16 13:28:28'),
	(5, 1, 2, '经典美文2', NULL, '<p>\n	<span>&nbsp; 红尘冷暖，岁月清浅，仓促间，遗落一地，如诗的句点，不甘愿，不决绝，掬一份刻骨的思念，系一根心的挂牵，在你回眸的瞬间，一抹兰轩的底色，悄然纳于心间，不问深浅，暖一世的欢颜。</span></p>\n<p>\n	----------<span>题记</span></p>\n<p>\n	<span>&nbsp; 近来，有丝丝倦怠，铺天盖地的不肯离开，执笔，画圈，一闪而过的念，总是一而再，再而三的被搁浅，那些不情不愿的小情绪，占领了太多的空间，庸庸碌碌中，任光阴无情的在指缝中删删减减。</span></p>', 0, '2017-11-16 13:31:07', '2017-11-16 13:31:07'),
	(6, 1, 1, '经典美文34', NULL, '<p>\n	<span>&nbsp; 红尘冷暖，岁月清浅，仓促间，遗落一地，如诗的句点，不甘愿，不决绝，掬一份刻骨的思念，系一根心的挂牵，在你回眸的瞬间，一抹兰轩的底色，悄然纳于心间，不问深浅，暖一世的欢颜。</span></p>\n<p>\n	----------<span>题记</span></p>\n<p>\n	<span>&nbsp; 近来，有丝丝倦怠，铺天盖地的不肯离开，执笔，画圈，一闪而过的念，总是一而再，再而三的被搁浅，那些不情不愿的小情绪，占领了太多的空间，庸庸碌碌中，任光阴无情的在指缝中删删减减。</span></p>', 0, '2017-11-16 13:31:12', '2017-11-16 13:31:12'),
	(7, 1, 2, '人生若只如初见☆何事秋风悲画扇。', NULL, '<p>\n	文/雨夜情深</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n红尘陌上的花开。似比相见又恨晚的聚散，相遇过早前方的路人，便会成为身后的过客。相识过晚倾城清风的颜美。便会与你擦肩，来不及仰望。说不出再见，从此山隔一河。却天涯此岸，回眸仰望已是曾经沧海，百花残月之冬。相遇有缘，离花漂过。景色的相遇正如那份。一直落在思念里的寒冬，无论冰川怎样刺骨。雪花怎样漂过，一颗执着的心。一直苦苦寻找。天暗未明微落的天空却被大雪覆盖，热血的少年。曾经的意志，却从未止步。从春天到寒冬。从寒冬到天荒，一直守护着这份。从未揭开的思念。\n &nbsp;<br>\n	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n<p>\n	——题记<br>\n	&nbsp;</p>\n<p>\n	\n红尘相遇，年华已老。岁月花开多少不在，古往今来相遇是一件既微妙。而又神圣的事情，红尘的情网中。有前者因聚散而离开，后者才因前者的离开。而深深的相遇，曾经有人说过。有缘份相遇的人。无论彼此绕开多大个圈，也会在某个不经意间。彼此依然可以重逢相遇，其实这种故事。只是说说而已。故此，却有很多人相信。从而走进缘分的刹那。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n世间的感情，仅隔着一道距离。有些感情因距离而变得美好，有些美好因为距离。鼓励了彼此，才会让前进的路。充满了阳光照进了幸福。温暖了彼此，不过有时候。距离真是一把，验证感情的时光机。故此，有人因它而坚持。因为相信熬过了距离。剩下的便是春风，有人因它而离去，因为相信前方的未明。故此半路匆匆离去，</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n故年走远，人故未来。走过一段是相知，走过一年是相交。在生命中，有些人一起走。在年华中，有些人分开走。在相遇的渡口，有些人。走着走着就没了，有些陌生人。走着走着就在一起了，有些人我始终不知道。会在哪里相聚，又会在哪里提前离开。生命的短暂，相遇的珍惜。所以相遇就是缘，相识便是份。生命中。时间是一场盛宴，爱情是一场坚守。时间走过的雪月，是年华似水中。那一曲独听静好，爱情是一场相遇。一场落花，同样是一场聚散。人生因情而美。岁月因爱而坚守。</p>\n<p>\n	&nbsp;</p>\n<p>\n	陌上花开，隔桌花夜。一雨芳年，相遇的竹叶。刻写着一一路走过的青苔，时光雨下。散落一地落红，那景，那月。正如初好，一丝寒风袭来。碧玉含羞的清风，凝固了月下。送走了独夜，留下了一丝静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n年华依旧。散落曾经，你说雨中的风。是你曾经追逐的梦，而冬天的雪。是你曾经散落的花，花开有别。言过其辞。多年以后，每到雪花飘落的季节。都会想起那个曾经的画面，既唯美而又纷飞。既伤感而又无言，一场大雪。一场落花，托清风捎去了思念。托无言凝固了沧海。托花开美丽了过往，时而雨。一路一花开，一路一菩提。今生的遇见，相逢的花开。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n走过一段路，总会看一些风景。停留一段时光，总会留下一些故事。其实很多时候。我们都知道每一个故事，总有一个美丽的结局。只是这个结局太过沧桑，也太过唯美，直至最后的散场，竞美得透露着忧伤。忧伤里散播着凄凉，凄凉里隐藏着无言。岁月中总有一场景，落在不经意的地方，人生中总有一场雪，漂在夜深人静的时候，一场散，一场缘。一场雪。只愿时光芬芳，落花静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n人生的路上，总是一路走过。人生的感情总是，一路擦肩聚散。这个世间，总有人因懂你而停留，也总有人因误解而离开。对于一路走过而停留的人，我们心存感激。因为有共鸣。所以不会离开，生命的路上。红尘的渡口。总有一些人不曾深交。也不再打扰，却也一直都在不曾离开。只是时光仿佛将相遇。定格在彼岸与此岸的一角，从此隔了一个美丽的春天。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n生命中一些风。一些景，总在岁月中，演奏的远去的故事，一些落叶。漂过枝头，随风飞翔，这样的季节，这样的回忆。不知道还能在岁月中展示多久，但我知道走过的路，一定会留下一些我们无法预料到的意外，预料多了也就习惯了。生命是如此。岁月便也跟着如此，走过时间的沧海。借往日那段无声的沉默，漂泊着属于自己的天涯。</p>\n<p>\n	&nbsp;</p>\n<p>\n	流年的道别中，总有一段无法言辞的往诉。站在惜忆的尽头，数数奔赶过的黄昏，言出黄昏的每一季：静惜的落雨中，总带着这样或那样的心情，慢步独入那冰雨的清风里，感受着每一个季节带来别样的静好，</p>\n<p>\n	&nbsp;</p>\n<p>\n	寒风吹过。陌上红尘，散落过往。</p>', 0, '2017-11-16 13:32:49', '2017-11-16 13:32:49'),
	(8, 1, 2, '人生若只如初见☆何事秋风悲画扇2', NULL, '<p>\n	文/雨夜情深</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n红尘陌上的花开。似比相见又恨晚的聚散，相遇过早前方的路人，便会成为身后的过客。相识过晚倾城清风的颜美。便会与你擦肩，来不及仰望。说不出再见，从此山隔一河。却天涯此岸，回眸仰望已是曾经沧海，百花残月之冬。相遇有缘，离花漂过。景色的相遇正如那份。一直落在思念里的寒冬，无论冰川怎样刺骨。雪花怎样漂过，一颗执着的心。一直苦苦寻找。天暗未明微落的天空却被大雪覆盖，热血的少年。曾经的意志，却从未止步。从春天到寒冬。从寒冬到天荒，一直守护着这份。从未揭开的思念。\n &nbsp;<br>\n	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n<p>\n	——题记<br>\n	&nbsp;</p>\n<p>\n	\n红尘相遇，年华已老。岁月花开多少不在，古往今来相遇是一件既微妙。而又神圣的事情，红尘的情网中。有前者因聚散而离开，后者才因前者的离开。而深深的相遇，曾经有人说过。有缘份相遇的人。无论彼此绕开多大个圈，也会在某个不经意间。彼此依然可以重逢相遇，其实这种故事。只是说说而已。故此，却有很多人相信。从而走进缘分的刹那。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n世间的感情，仅隔着一道距离。有些感情因距离而变得美好，有些美好因为距离。鼓励了彼此，才会让前进的路。充满了阳光照进了幸福。温暖了彼此，不过有时候。距离真是一把，验证感情的时光机。故此，有人因它而坚持。因为相信熬过了距离。剩下的便是春风，有人因它而离去，因为相信前方的未明。故此半路匆匆离去，</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n故年走远，人故未来。走过一段是相知，走过一年是相交。在生命中，有些人一起走。在年华中，有些人分开走。在相遇的渡口，有些人。走着走着就没了，有些陌生人。走着走着就在一起了，有些人我始终不知道。会在哪里相聚，又会在哪里提前离开。生命的短暂，相遇的珍惜。所以相遇就是缘，相识便是份。生命中。时间是一场盛宴，爱情是一场坚守。时间走过的雪月，是年华似水中。那一曲独听静好，爱情是一场相遇。一场落花，同样是一场聚散。人生因情而美。岁月因爱而坚守。</p>\n<p>\n	&nbsp;</p>\n<p>\n	陌上花开，隔桌花夜。一雨芳年，相遇的竹叶。刻写着一一路走过的青苔，时光雨下。散落一地落红，那景，那月。正如初好，一丝寒风袭来。碧玉含羞的清风，凝固了月下。送走了独夜，留下了一丝静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n年华依旧。散落曾经，你说雨中的风。是你曾经追逐的梦，而冬天的雪。是你曾经散落的花，花开有别。言过其辞。多年以后，每到雪花飘落的季节。都会想起那个曾经的画面，既唯美而又纷飞。既伤感而又无言，一场大雪。一场落花，托清风捎去了思念。托无言凝固了沧海。托花开美丽了过往，时而雨。一路一花开，一路一菩提。今生的遇见，相逢的花开。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n走过一段路，总会看一些风景。停留一段时光，总会留下一些故事。其实很多时候。我们都知道每一个故事，总有一个美丽的结局。只是这个结局太过沧桑，也太过唯美，直至最后的散场，竞美得透露着忧伤。忧伤里散播着凄凉，凄凉里隐藏着无言。岁月中总有一场景，落在不经意的地方，人生中总有一场雪，漂在夜深人静的时候，一场散，一场缘。一场雪。只愿时光芬芳，落花静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n人生的路上，总是一路走过。人生的感情总是，一路擦肩聚散。这个世间，总有人因懂你而停留，也总有人因误解而离开。对于一路走过而停留的人，我们心存感激。因为有共鸣。所以不会离开，生命的路上。红尘的渡口。总有一些人不曾深交。也不再打扰，却也一直都在不曾离开。只是时光仿佛将相遇。定格在彼岸与此岸的一角，从此隔了一个美丽的春天。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n生命中一些风。一些景，总在岁月中，演奏的远去的故事，一些落叶。漂过枝头，随风飞翔，这样的季节，这样的回忆。不知道还能在岁月中展示多久，但我知道走过的路，一定会留下一些我们无法预料到的意外，预料多了也就习惯了。生命是如此。岁月便也跟着如此，走过时间的沧海。借往日那段无声的沉默，漂泊着属于自己的天涯。</p>\n<p>\n	&nbsp;</p>\n<p>\n	流年的道别中，总有一段无法言辞的往诉。站在惜忆的尽头，数数奔赶过的黄昏，言出黄昏的每一季：静惜的落雨中，总带着这样或那样的心情，慢步独入那冰雨的清风里，感受着每一个季节带来别样的静好，</p>\n<p>\n	&nbsp;</p>\n<p>\n	寒风吹过。陌上红尘，散落过往。</p>', 0, '2017-11-16 13:33:01', '2017-11-16 13:33:01'),
	(9, 1, 3, '人生若只如初见☆何事秋风悲画扇3', NULL, '<p>\n	文/雨夜情深</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n红尘陌上的花开。似比相见又恨晚的聚散，相遇过早前方的路人，便会成为身后的过客。相识过晚倾城清风的颜美。便会与你擦肩，来不及仰望。说不出再见，从此山隔一河。却天涯此岸，回眸仰望已是曾经沧海，百花残月之冬。相遇有缘，离花漂过。景色的相遇正如那份。一直落在思念里的寒冬，无论冰川怎样刺骨。雪花怎样漂过，一颗执着的心。一直苦苦寻找。天暗未明微落的天空却被大雪覆盖，热血的少年。曾经的意志，却从未止步。从春天到寒冬。从寒冬到天荒，一直守护着这份。从未揭开的思念。\n &nbsp;<br>\n	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n<p>\n	——题记<br>\n	&nbsp;</p>\n<p>\n	\n红尘相遇，年华已老。岁月花开多少不在，古往今来相遇是一件既微妙。而又神圣的事情，红尘的情网中。有前者因聚散而离开，后者才因前者的离开。而深深的相遇，曾经有人说过。有缘份相遇的人。无论彼此绕开多大个圈，也会在某个不经意间。彼此依然可以重逢相遇，其实这种故事。只是说说而已。故此，却有很多人相信。从而走进缘分的刹那。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n世间的感情，仅隔着一道距离。有些感情因距离而变得美好，有些美好因为距离。鼓励了彼此，才会让前进的路。充满了阳光照进了幸福。温暖了彼此，不过有时候。距离真是一把，验证感情的时光机。故此，有人因它而坚持。因为相信熬过了距离。剩下的便是春风，有人因它而离去，因为相信前方的未明。故此半路匆匆离去，</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n故年走远，人故未来。走过一段是相知，走过一年是相交。在生命中，有些人一起走。在年华中，有些人分开走。在相遇的渡口，有些人。走着走着就没了，有些陌生人。走着走着就在一起了，有些人我始终不知道。会在哪里相聚，又会在哪里提前离开。生命的短暂，相遇的珍惜。所以相遇就是缘，相识便是份。生命中。时间是一场盛宴，爱情是一场坚守。时间走过的雪月，是年华似水中。那一曲独听静好，爱情是一场相遇。一场落花，同样是一场聚散。人生因情而美。岁月因爱而坚守。</p>\n<p>\n	&nbsp;</p>\n<p>\n	陌上花开，隔桌花夜。一雨芳年，相遇的竹叶。刻写着一一路走过的青苔，时光雨下。散落一地落红，那景，那月。正如初好，一丝寒风袭来。碧玉含羞的清风，凝固了月下。送走了独夜，留下了一丝静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n年华依旧。散落曾经，你说雨中的风。是你曾经追逐的梦，而冬天的雪。是你曾经散落的花，花开有别。言过其辞。多年以后，每到雪花飘落的季节。都会想起那个曾经的画面，既唯美而又纷飞。既伤感而又无言，一场大雪。一场落花，托清风捎去了思念。托无言凝固了沧海。托花开美丽了过往，时而雨。一路一花开，一路一菩提。今生的遇见，相逢的花开。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n走过一段路，总会看一些风景。停留一段时光，总会留下一些故事。其实很多时候。我们都知道每一个故事，总有一个美丽的结局。只是这个结局太过沧桑，也太过唯美，直至最后的散场，竞美得透露着忧伤。忧伤里散播着凄凉，凄凉里隐藏着无言。岁月中总有一场景，落在不经意的地方，人生中总有一场雪，漂在夜深人静的时候，一场散，一场缘。一场雪。只愿时光芬芳，落花静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n人生的路上，总是一路走过。人生的感情总是，一路擦肩聚散。这个世间，总有人因懂你而停留，也总有人因误解而离开。对于一路走过而停留的人，我们心存感激。因为有共鸣。所以不会离开，生命的路上。红尘的渡口。总有一些人不曾深交。也不再打扰，却也一直都在不曾离开。只是时光仿佛将相遇。定格在彼岸与此岸的一角，从此隔了一个美丽的春天。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n生命中一些风。一些景，总在岁月中，演奏的远去的故事，一些落叶。漂过枝头，随风飞翔，这样的季节，这样的回忆。不知道还能在岁月中展示多久，但我知道走过的路，一定会留下一些我们无法预料到的意外，预料多了也就习惯了。生命是如此。岁月便也跟着如此，走过时间的沧海。借往日那段无声的沉默，漂泊着属于自己的天涯。</p>\n<p>\n	&nbsp;</p>\n<p>\n	流年的道别中，总有一段无法言辞的往诉。站在惜忆的尽头，数数奔赶过的黄昏，言出黄昏的每一季：静惜的落雨中，总带着这样或那样的心情，慢步独入那冰雨的清风里，感受着每一个季节带来别样的静好，</p>\n<p>\n	&nbsp;</p>\n<p>\n	寒风吹过。陌上红尘，散落过往。</p>', 36, '2017-11-16 13:33:06', '2017-11-17 14:02:28'),
	(10, 1, 3, '人生若只如初见☆何事秋风悲画扇76', NULL, '<p>\n	文/雨夜情深</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n红尘陌上的花开。似比相见又恨晚的聚散，相遇过早前方的路人，便会成为身后的过客。相识过晚倾城清风的颜美。便会与你擦肩，来不及仰望。说不出再见，从此山隔一河。却天涯此岸，回眸仰望已是曾经沧海，百花残月之冬。相遇有缘，离花漂过。景色的相遇正如那份。一直落在思念里的寒冬，无论冰川怎样刺骨。雪花怎样漂过，一颗执着的心。一直苦苦寻找。天暗未明微落的天空却被大雪覆盖，热血的少年。曾经的意志，却从未止步。从春天到寒冬。从寒冬到天荒，一直守护着这份。从未揭开的思念。\n &nbsp;<br>\n	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n<p>\n	——题记<br>\n	&nbsp;</p>\n<p>\n	\n红尘相遇，年华已老。岁月花开多少不在，古往今来相遇是一件既微妙。而又神圣的事情，红尘的情网中。有前者因聚散而离开，后者才因前者的离开。而深深的相遇，曾经有人说过。有缘份相遇的人。无论彼此绕开多大个圈，也会在某个不经意间。彼此依然可以重逢相遇，其实这种故事。只是说说而已。故此，却有很多人相信。从而走进缘分的刹那。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n世间的感情，仅隔着一道距离。有些感情因距离而变得美好，有些美好因为距离。鼓励了彼此，才会让前进的路。充满了阳光照进了幸福。温暖了彼此，不过有时候。距离真是一把，验证感情的时光机。故此，有人因它而坚持。因为相信熬过了距离。剩下的便是春风，有人因它而离去，因为相信前方的未明。故此半路匆匆离去，</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n故年走远，人故未来。走过一段是相知，走过一年是相交。在生命中，有些人一起走。在年华中，有些人分开走。在相遇的渡口，有些人。走着走着就没了，有些陌生人。走着走着就在一起了，有些人我始终不知道。会在哪里相聚，又会在哪里提前离开。生命的短暂，相遇的珍惜。所以相遇就是缘，相识便是份。生命中。时间是一场盛宴，爱情是一场坚守。时间走过的雪月，是年华似水中。那一曲独听静好，爱情是一场相遇。一场落花，同样是一场聚散。人生因情而美。岁月因爱而坚守。</p>\n<p>\n	&nbsp;</p>\n<p>\n	陌上花开，隔桌花夜。一雨芳年，相遇的竹叶。刻写着一一路走过的青苔，时光雨下。散落一地落红，那景，那月。正如初好，一丝寒风袭来。碧玉含羞的清风，凝固了月下。送走了独夜，留下了一丝静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n年华依旧。散落曾经，你说雨中的风。是你曾经追逐的梦，而冬天的雪。是你曾经散落的花，花开有别。言过其辞。多年以后，每到雪花飘落的季节。都会想起那个曾经的画面，既唯美而又纷飞。既伤感而又无言，一场大雪。一场落花，托清风捎去了思念。托无言凝固了沧海。托花开美丽了过往，时而雨。一路一花开，一路一菩提。今生的遇见，相逢的花开。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n走过一段路，总会看一些风景。停留一段时光，总会留下一些故事。其实很多时候。我们都知道每一个故事，总有一个美丽的结局。只是这个结局太过沧桑，也太过唯美，直至最后的散场，竞美得透露着忧伤。忧伤里散播着凄凉，凄凉里隐藏着无言。岁月中总有一场景，落在不经意的地方，人生中总有一场雪，漂在夜深人静的时候，一场散，一场缘。一场雪。只愿时光芬芳，落花静好。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n人生的路上，总是一路走过。人生的感情总是，一路擦肩聚散。这个世间，总有人因懂你而停留，也总有人因误解而离开。对于一路走过而停留的人，我们心存感激。因为有共鸣。所以不会离开，生命的路上。红尘的渡口。总有一些人不曾深交。也不再打扰，却也一直都在不曾离开。只是时光仿佛将相遇。定格在彼岸与此岸的一角，从此隔了一个美丽的春天。</p>\n<p>\n	&nbsp;</p>\n<p>\n	\n生命中一些风。一些景，总在岁月中，演奏的远去的故事，一些落叶。漂过枝头，随风飞翔，这样的季节，这样的回忆。不知道还能在岁月中展示多久，但我知道走过的路，一定会留下一些我们无法预料到的意外，预料多了也就习惯了。生命是如此。岁月便也跟着如此，走过时间的沧海。借往日那段无声的沉默，漂泊着属于自己的天涯。</p>\n<p>\n	&nbsp;</p>\n<p>\n	流年的道别中，总有一段无法言辞的往诉。站在惜忆的尽头，数数奔赶过的黄昏，言出黄昏的每一季：静惜的落雨中，总带着这样或那样的心情，慢步独入那冰雨的清风里，感受着每一个季节带来别样的静好，</p>\n<p>\n	&nbsp;</p>\n<p>\n	寒风吹过。陌上红尘，散落过往。</p>', 0, '2017-11-16 13:33:13', '2017-11-16 13:33:13'),
	(11, 1, 3, '人生若只如初见☆何事秋风悲画扇76', NULL, '<p>经历了很多事，看过很多花开花落。于是明白了生命中有些事聚散无常，则有些是半生注定无力更改。曾经一直努力想要改变这个结局，无论怎么拼搏命运的巅峰。像是前世注定的一般让我不得不接受这个，让人厌倦的海洋。我一直以为看过的落花，只要用心呵护便会开花结果。以为用心执着便会一路走过，以为用心珍惜时光会带着绝恋稍作停留。但是我忘了，时光如流水生命如落花。</p>\n<p>就像流水一样，此岸流到彼岸。是一种牵挂也是一种期待，更是一种追求或许人生中只是我们奢求的太多。就像有些东西注定与你无缘无份，你却一直拼命的努力耗尽所有力气去争取。结果到最后什么都没有得到，唯一所能得到的只有回忆与经历。还有为此付出的时光和苦不堪言的伤痛，其余的我们一无所有。很多时候我一直在想，倘若生命从一开始有些感情。不那么用心是不是就可以避免因感情而带来的创伤，无数个黑夜我不止一次的问自己。</p>\n<p>为什么一定要如此情深，为什么迟迟不肯卸下包袱。你还要带着那份不属于你的爱走多远，其实你心里很明白。时光已远过客一别，即便是再眷恋十年二十年。时光也不会转身用心情深一场，因为自己不在乎的人多看一眼都是多余。其实你依然很明白不是你不够优秀，也不是你不够好。而是每个人都希望自己能找到一个，称心如意自己所喜欢的另一半。当时经历的时候一直以为，只是时光还不成熟我们都应该长大。长大后才蓦然回首青春与时光是并行的，在经历着青春懵懂的时候，同时也再失去最好的年华。</p>\n<p>有时候一直在想，倘若没有经历这一切。是不是就是一个幸福的人，答案是否定的。因为有些人没有经历过，就不会知道一起经历的风雨有多珍贵。也更不会知道那一场代价是牺牲了什么，一路走来伤痕累累远去了很多朋友。同时也验证了很多留下来的人，因为这些人都是曾经陪你一起走过风奔过雨的人。时光是一场验证感情的机器，你是一个幸运的人，因为上天安排这一切让你撕心裂肺的经历一场。痛苦流泪的爱一场，伤心欲绝的离别一场。到最后终归平静看尽花开花落，懂得人间聚散是一场缘。</p>\n<p>又何尝不是一种恩赐，是的你只有带着这些感恩。继续前行在未来的路上，而不是将所有的伤痕化为经历。永远记在心里过目不忘，这是时光所不允许的。即便是你在铭记一个世纪又能怎么样，时光会为你而独自倒流。显然是不可能因为走远的人你必须要忘掉，即便是忘不掉也不应该再提起。至少现在是这样因为你还有很多事情要做，不应该一直停留这件没有意义的事上。浪费的只是你更多的年华，所以此去经年当这所有发生的一切。只是一场经历只是一场时光的修行而已，</p>\n<p>我们只有修行自己，才会百毒不侵。我们只有看淡一切才会将所有的陈年往事，被时光风化被流年带走。剩下的只有一颗百毒不侵的意志，意志有多远便会走多远。不会因为生活中的琐事而被判倒，再也不会因为留恋而忘了自己所目睹的一切。看淡了也就有很多事不再去想，因为有很多事我们明明可以拒绝于千里之外，止步流年挥洒心意。因为我们都是时光的路人。都有各自的天涯，各自的彼岸。各自的花开。各自的花落，各自的烟火。繁华一场如若你在何其所幸。如若你来何惧花开！</p>', 0, '2017-11-16 13:33:45', '2017-11-16 13:33:45'),
	(12, 1, 4, '人生若只如初见', NULL, '<p>经历了很多事，看过很多花开花落。于是明白了生命中有些事聚散无常，则有些是半生注定无力更改。曾经一直努力想要改变这个结局，无论怎么拼搏命运的巅峰。像是前世注定的一般让我不得不接受这个，让人厌倦的海洋。我一直以为看过的落花，只要用心呵护便会开花结果。以为用心执着便会一路走过，以为用心珍惜时光会带着绝恋稍作停留。但是我忘了，时光如流水生命如落花。</p>\n<p>就像流水一样，此岸流到彼岸。是一种牵挂也是一种期待，更是一种追求或许人生中只是我们奢求的太多。就像有些东西注定与你无缘无份，你却一直拼命的努力耗尽所有力气去争取。结果到最后什么都没有得到，唯一所能得到的只有回忆与经历。还有为此付出的时光和苦不堪言的伤痛，其余的我们一无所有。很多时候我一直在想，倘若生命从一开始有些感情。不那么用心是不是就可以避免因感情而带来的创伤，无数个黑夜我不止一次的问自己。</p>\n<p>为什么一定要如此情深，为什么迟迟不肯卸下包袱。你还要带着那份不属于你的爱走多远，其实你心里很明白。时光已远过客一别，即便是再眷恋十年二十年。时光也不会转身用心情深一场，因为自己不在乎的人多看一眼都是多余。其实你依然很明白不是你不够优秀，也不是你不够好。而是每个人都希望自己能找到一个，称心如意自己所喜欢的另一半。当时经历的时候一直以为，只是时光还不成熟我们都应该长大。长大后才蓦然回首青春与时光是并行的，在经历着青春懵懂的时候，同时也再失去最好的年华。</p>\n<p>有时候一直在想，倘若没有经历这一切。是不是就是一个幸福的人，答案是否定的。因为有些人没有经历过，就不会知道一起经历的风雨有多珍贵。也更不会知道那一场代价是牺牲了什么，一路走来伤痕累累远去了很多朋友。同时也验证了很多留下来的人，因为这些人都是曾经陪你一起走过风奔过雨的人。时光是一场验证感情的机器，你是一个幸运的人，因为上天安排这一切让你撕心裂肺的经历一场。痛苦流泪的爱一场，伤心欲绝的离别一场。到最后终归平静看尽花开花落，懂得人间聚散是一场缘。</p>\n<p>又何尝不是一种恩赐，是的你只有带着这些感恩。继续前行在未来的路上，而不是将所有的伤痕化为经历。永远记在心里过目不忘，这是时光所不允许的。即便是你在铭记一个世纪又能怎么样，时光会为你而独自倒流。显然是不可能因为走远的人你必须要忘掉，即便是忘不掉也不应该再提起。至少现在是这样因为你还有很多事情要做，不应该一直停留这件没有意义的事上。浪费的只是你更多的年华，所以此去经年当这所有发生的一切。只是一场经历只是一场时光的修行而已，</p>\n<p>我们只有修行自己，才会百毒不侵。我们只有看淡一切才会将所有的陈年往事，被时光风化被流年带走。剩下的只有一颗百毒不侵的意志，意志有多远便会走多远。不会因为生活中的琐事而被判倒，再也不会因为留恋而忘了自己所目睹的一切。看淡了也就有很多事不再去想，因为有很多事我们明明可以拒绝于千里之外，止步流年挥洒心意。因为我们都是时光的路人。都有各自的天涯，各自的彼岸。各自的花开。各自的花落，各自的烟火。繁华一场如若你在何其所幸。如若你来何惧花开！</p>', 7, '2017-11-16 13:33:52', '2017-11-17 14:43:49'),
	(13, 1, 2, '☆何事秋风悲画扇76', NULL, '<p>经历了很多事，看过很多花开花落。于是明白了生命中有些事聚散无常，则有些是半生注定无力更改。曾经一直努力想要改变这个结局，无论怎么拼搏命运的巅峰。像是前世注定的一般让我不得不接受这个，让人厌倦的海洋。我一直以为看过的落花，只要用心呵护便会开花结果。以为用心执着便会一路走过，以为用心珍惜时光会带着绝恋稍作停留。但是我忘了，时光如流水生命如落花。</p>\n<p>就像流水一样，此岸流到彼岸。是一种牵挂也是一种期待，更是一种追求或许人生中只是我们奢求的太多。就像有些东西注定与你无缘无份，你却一直拼命的努力耗尽所有力气去争取。结果到最后什么都没有得到，唯一所能得到的只有回忆与经历。还有为此付出的时光和苦不堪言的伤痛，其余的我们一无所有。很多时候我一直在想，倘若生命从一开始有些感情。不那么用心是不是就可以避免因感情而带来的创伤，无数个黑夜我不止一次的问自己。</p>\n<p>为什么一定要如此情深，为什么迟迟不肯卸下包袱。你还要带着那份不属于你的爱走多远，其实你心里很明白。时光已远过客一别，即便是再眷恋十年二十年。时光也不会转身用心情深一场，因为自己不在乎的人多看一眼都是多余。其实你依然很明白不是你不够优秀，也不是你不够好。而是每个人都希望自己能找到一个，称心如意自己所喜欢的另一半。当时经历的时候一直以为，只是时光还不成熟我们都应该长大。长大后才蓦然回首青春与时光是并行的，在经历着青春懵懂的时候，同时也再失去最好的年华。</p>\n<p>有时候一直在想，倘若没有经历这一切。是不是就是一个幸福的人，答案是否定的。因为有些人没有经历过，就不会知道一起经历的风雨有多珍贵。也更不会知道那一场代价是牺牲了什么，一路走来伤痕累累远去了很多朋友。同时也验证了很多留下来的人，因为这些人都是曾经陪你一起走过风奔过雨的人。时光是一场验证感情的机器，你是一个幸运的人，因为上天安排这一切让你撕心裂肺的经历一场。痛苦流泪的爱一场，伤心欲绝的离别一场。到最后终归平静看尽花开花落，懂得人间聚散是一场缘。</p>\n<p>又何尝不是一种恩赐，是的你只有带着这些感恩。继续前行在未来的路上，而不是将所有的伤痕化为经历。永远记在心里过目不忘，这是时光所不允许的。即便是你在铭记一个世纪又能怎么样，时光会为你而独自倒流。显然是不可能因为走远的人你必须要忘掉，即便是忘不掉也不应该再提起。至少现在是这样因为你还有很多事情要做，不应该一直停留这件没有意义的事上。浪费的只是你更多的年华，所以此去经年当这所有发生的一切。只是一场经历只是一场时光的修行而已，</p>\n<p>我们只有修行自己，才会百毒不侵。我们只有看淡一切才会将所有的陈年往事，被时光风化被流年带走。剩下的只有一颗百毒不侵的意志，意志有多远便会走多远。不会因为生活中的琐事而被判倒，再也不会因为留恋而忘了自己所目睹的一切。看淡了也就有很多事不再去想，因为有很多事我们明明可以拒绝于千里之外，止步流年挥洒心意。因为我们都是时光的路人。都有各自的天涯，各自的彼岸。各自的花开。各自的花落，各自的烟火。繁华一场如若你在何其所幸。如若你来何惧花开！</p>', 0, '2017-11-16 13:33:57', '2017-11-16 13:33:57'),
	(14, 1, 2, '☆何事秋风悲画扇', NULL, '<p>经历了很多事，看过很多花开花落。于是明白了生命中有些事聚散无常，则有些是半生注定无力更改。曾经一直努力想要改变这个结局，无论怎么拼搏命运的巅峰。像是前世注定的一般让我不得不接受这个，让人厌倦的海洋。我一直以为看过的落花，只要用心呵护便会开花结果。以为用心执着便会一路走过，以为用心珍惜时光会带着绝恋稍作停留。但是我忘了，时光如流水生命如落花。</p>\n<p>就像流水一样，此岸流到彼岸。是一种牵挂也是一种期待，更是一种追求或许人生中只是我们奢求的太多。就像有些东西注定与你无缘无份，你却一直拼命的努力耗尽所有力气去争取。结果到最后什么都没有得到，唯一所能得到的只有回忆与经历。还有为此付出的时光和苦不堪言的伤痛，其余的我们一无所有。很多时候我一直在想，倘若生命从一开始有些感情。不那么用心是不是就可以避免因感情而带来的创伤，无数个黑夜我不止一次的问自己。</p>\n<p>为什么一定要如此情深，为什么迟迟不肯卸下包袱。你还要带着那份不属于你的爱走多远，其实你心里很明白。时光已远过客一别，即便是再眷恋十年二十年。时光也不会转身用心情深一场，因为自己不在乎的人多看一眼都是多余。其实你依然很明白不是你不够优秀，也不是你不够好。而是每个人都希望自己能找到一个，称心如意自己所喜欢的另一半。当时经历的时候一直以为，只是时光还不成熟我们都应该长大。长大后才蓦然回首青春与时光是并行的，在经历着青春懵懂的时候，同时也再失去最好的年华。</p>\n<p>有时候一直在想，倘若没有经历这一切。是不是就是一个幸福的人，答案是否定的。因为有些人没有经历过，就不会知道一起经历的风雨有多珍贵。也更不会知道那一场代价是牺牲了什么，一路走来伤痕累累远去了很多朋友。同时也验证了很多留下来的人，因为这些人都是曾经陪你一起走过风奔过雨的人。时光是一场验证感情的机器，你是一个幸运的人，因为上天安排这一切让你撕心裂肺的经历一场。痛苦流泪的爱一场，伤心欲绝的离别一场。到最后终归平静看尽花开花落，懂得人间聚散是一场缘。</p>\n<p>又何尝不是一种恩赐，是的你只有带着这些感恩。继续前行在未来的路上，而不是将所有的伤痕化为经历。永远记在心里过目不忘，这是时光所不允许的。即便是你在铭记一个世纪又能怎么样，时光会为你而独自倒流。显然是不可能因为走远的人你必须要忘掉，即便是忘不掉也不应该再提起。至少现在是这样因为你还有很多事情要做，不应该一直停留这件没有意义的事上。浪费的只是你更多的年华，所以此去经年当这所有发生的一切。只是一场经历只是一场时光的修行而已，</p>\n<p>我们只有修行自己，才会百毒不侵。我们只有看淡一切才会将所有的陈年往事，被时光风化被流年带走。剩下的只有一颗百毒不侵的意志，意志有多远便会走多远。不会因为生活中的琐事而被判倒，再也不会因为留恋而忘了自己所目睹的一切。看淡了也就有很多事不再去想，因为有很多事我们明明可以拒绝于千里之外，止步流年挥洒心意。因为我们都是时光的路人。都有各自的天涯，各自的彼岸。各自的花开。各自的花落，各自的烟火。繁华一场如若你在何其所幸。如若你来何惧花开！</p>', 0, '2017-11-16 13:34:02', '2017-11-16 13:34:02');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE IF NOT EXISTS `article_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_article_tag_article` (`article_id`),
  KEY `FK_article_tag_tag` (`tag_id`),
  CONSTRAINT `FK_article_tag_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_article_tag_tag` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章标签';

DELETE FROM `article_tag`;
/*!40000 ALTER TABLE `article_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_tag` ENABLE KEYS */;

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='分类';

DELETE FROM `category`;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `parent_id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 0, '资讯', '2017-11-16 13:13:59', '2017-11-16 13:13:59'),
	(2, 0, '专栏', '2017-11-16 20:22:07', '2017-11-16 20:22:07'),
	(3, 0, '问答', '2017-11-16 20:22:17', '2017-11-16 20:22:17'),
	(4, 0, '资源', '2017-11-16 20:22:30', '2017-11-16 20:22:30');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

DROP TABLE IF EXISTS `collect`;
CREATE TABLE IF NOT EXISTS `collect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_praise_user` (`user_id`),
  KEY `FK_praise_article` (`article_id`),
  CONSTRAINT `collect_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `collect_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='文章点赞';

DELETE FROM `collect`;
/*!40000 ALTER TABLE `collect` DISABLE KEYS */;
/*!40000 ALTER TABLE `collect` ENABLE KEYS */;

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `reply_to` int(11) DEFAULT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_comment_user` (`user_id`),
  KEY `FK_comment_article` (`article_id`),
  CONSTRAINT `FK_comment_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_comment_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章评论';

DELETE FROM `comment`;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

DROP TABLE IF EXISTS `praise`;
CREATE TABLE IF NOT EXISTS `praise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_praise_user` (`user_id`),
  KEY `FK_praise_article` (`article_id`),
  CONSTRAINT `FK_praise_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_praise_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='文章点赞';

DELETE FROM `praise`;
/*!40000 ALTER TABLE `praise` DISABLE KEYS */;
/*!40000 ALTER TABLE `praise` ENABLE KEYS */;

DROP TABLE IF EXISTS `tag`;
CREATE TABLE IF NOT EXISTS `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `clicks` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='标签';

DELETE FROM `tag`;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `remember_token` varchar(100) DEFAULT NULL,
  `api_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户';

DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `email`, `phone`, `password`, `avatar`, `created_at`, `updated_at`, `remember_token`, `api_token`) VALUES
	(1, '祝敬雄', 'jingxiongzhu@outlook.com', NULL, '$2y$10$iBobE8/k7ROXR1pBpu1Wn.881LPIc0wh0eaMkmKYySb5LEplF6KZe', 'http://seopic.699pic.com/photo/00012/1518.jpg_wh1200.jpg', '2017-11-14 05:10:45', '2017-11-16 21:12:16', 'PO2dfraxnAw19RV880TcumOfc9zU1XkrHhEOeFtM0K8YCNkcFBBgXYsIyfuh', 'JEAML67lpbaOdD0Sl2C69eoAUpc0HhTJHD7smuEYdwxDcqyn3ZovPj4szBeV');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
