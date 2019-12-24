(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(t,e,_){"use strict";_.r(e);var v=_(0),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("这一章是缓存部分,问烂的Redis,废话不说开始")])]),t._v(" "),_("h3",{attrs:{id:"_1-你们项目中用的了redis-为什么要用redis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-你们项目中用的了redis-为什么要用redis"}},[t._v("#")]),t._v(" 1. 你们项目中用的了Redis,为什么要用Redis?")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("什么是Redis")])])]),t._v(" "),_("blockquote",[_("p",[t._v("Redis是一种内存数据库,与传统的数据库是不同的,数据直接放到内存中,类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1),采用单线程，避免了不必要的上下文切换和竞争条件,同时也避免了加锁释放锁的操作,Redis有五种数据类型String、Hash、List、Set、SortedSet,其中String应该是用到最广的\n2. 为什么要用redis")])]),t._v(" "),_("blockquote",[_("p",[t._v("引入缓存的目的就是保护数据库,我们公司刚开始用的是Memcached,后来又由于用Redis做了分布式锁,这里简单的对比一下两个缓存的区别")])]),t._v(" "),_("ul",[_("li",[t._v("Memcached所有的值均是简单的字符串，redis作为其替代者，支持更为丰富的数据类型")]),t._v(" "),_("li",[t._v("Redis的速度比Memcached快很多")]),t._v(" "),_("li",[t._v("Redis可以持久化其数据")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("那里用到了Redis?")])])]),t._v(" "),_("blockquote",[_("p",[t._v("由于我们是中台服务,举个例子来说,我们的店铺信息日查询QPS是千万级别的,如果没有缓存,我们的数据库早挂了,在一些查询基础信息的接口上面使用到.")])]),t._v(" "),_("h3",{attrs:{id:"_2-缓存一致性的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存一致性的问题"}},[t._v("#")]),t._v(" 2. 缓存一致性的问题")]),t._v(" "),_("p",[t._v("这个问题是我们经常遇到的,现实生活中真的会用到的")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("对于我们系统来说目前是怎么样的?")])])]),t._v(" "),_("blockquote",[_("p",[t._v("对于我们的系统来说,不是严格要求缓存和数据库必须保证一致性的,这个很难保证,如果要保证一致化的情况下我们就要保证串行化,但是这样做的带来结果就是系统的吞吐量会大幅下降")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("出现了如何解决")])])]),t._v(" "),_("blockquote",[_("p",[t._v("我们常见的做法就是删除与数据库不一致的缓存,然后重新请求将数据放到缓存中")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("为什么是删缓存但不是更新缓存")])])]),t._v(" "),_("blockquote",[_("p",[t._v("原因很简单，很多时候，在复杂点的缓存场景，缓存不单单是数据库中直接取出来的值,还参杂了业务的计算,另外更新缓存,是不是每次修改数据库的时候,都一定要将对应的缓存更新一份,这个显然是不合理的,你更新了缓存,但是这个缓存不会被频繁的访问到,我们正确的做法就是用到缓存的时候才去算缓存")])]),t._v(" "),_("h3",{attrs:{id:"_3-redis如何持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis如何持久化"}},[t._v("#")]),t._v(" 3. Redis如何持久化")]),t._v(" "),_("p",[t._v("说实话这块没有详细的了解过")]),t._v(" "),_("blockquote",[_("p",[t._v("主要又两种方式:")])]),t._v(" "),_("ol",[_("li",[t._v("RDB")])]),t._v(" "),_("ul",[_("li",[t._v("优点:\nRDB对Redis的性能影响非常小，是因为在同步数据的时候他只是fork了一个子进程去做持久化的，而且他在数据恢复的时候速度比AOF来的快,RDB都是快照文件")]),t._v(" "),_("li",[t._v("缺点:\n都是默认五分钟甚至更久的时间才会生成一次，这意味着你这次同步到下次同步这中间五分钟的数据都很可能全部丢失掉")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("AOF")])]),t._v(" "),_("ul",[_("li",[t._v("优点:\n定时异步刷新数据到磁盘,数据日志文件的方式,修改,删除,都写入到文件中但是AOF是一秒一次去通过一个后台的线程fsync操作，那最多丢这一秒的数据。")]),t._v(" "),_("li",[t._v("缺点:\n一样的数据，AOF文件比RDB还要大\nAOF开启后，Redis支持写的QPS会比RDB支持写的要低")])]),t._v(" "),_("p",[t._v("服务器重启的时候先把表的数据全部搞进去，但是他可能不完整，你再回放一下日志，数据不就完整了嘛。持优先加载AOF文件；AOF关闭或者AOF文件不存在时，加载RDB文件；")]),t._v(" "),_("h3",{attrs:{id:"_3-分布式锁的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-分布式锁的实现"}},[t._v("#")]),t._v(" 3. 分布式锁的实现")]),t._v(" "),_("p",[t._v("这个是我准备比较齐全的,慢慢来,分两点去讲")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("为什要用分布式锁")])])]),t._v(" "),_("blockquote",[_("p",[t._v("在多线程的环境下，为了保证一个代码块在同一时间只能由一个线程访问，Java中我们一般可以使用synchronized语法和ReetrantLock去保证，这实际上是本地锁的方式。但是现在公司都是流行分布式架构，在分布式环境下，为了达到上面的效果,就引出了分布锁")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("实现方式")])])]),t._v(" "),_("blockquote",[_("p",[t._v("分布式锁有多种实现方式,我们公司采用了基于Redis的实现,又有一个具体的演变过程,刚开始的时候,我们采用了setnx+expire命令去做,但是由于setnx和expire是分开的两步操作，不具有原子性，如果执行完第一条指令应用异常或者重启了，锁将无法过期,后来看了官方的文档,将上面两个步骤利用lua脚本整合到了一起,后来又了解到set key value [EX seconds][PX milliseconds]"),_("a",{attrs:{href:"%E5%BD%93%E9%94%AE%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%97%B6%EF%BC%8C%E6%89%8D%E8%83%BD%E6%88%90%E5%8A%9F%EF%BC%8C%E8%8B%A5%E9%94%AE%E5%AD%98%E5%9C%A8%EF%BC%8C%E4%BB%80%E4%B9%88%E4%B9%9F%E4%B8%8D%E5%81%9A%EF%BC%8C%E6%88%90%E5%8A%9F%E8%BF%94%E5%9B%9E1%EF%BC%8C%E5%A4%B1%E8%B4%A5%E8%BF%94%E5%9B%9E0"}},[t._v("NX|XX")]),t._v(",但是又出现了一个问题,我加的锁被别的线程释放了,后来我们在设置锁的时候,设置了一个请求值,在解锁的时候判断是否是目标线程在解锁,防止被其他线程误解,")])]),t._v(" "),_("p",[t._v("后来又了解到红锁,也就是官方介意使用的锁,我们目前没有使用")]),t._v(" "),_("p",[t._v("https://mp.weixin.qq.com/s?__biz=MzU5ODUwNzY1Nw==&mid=2247484155&idx=1&sn=0c73f45f2f641ba0bf4399f57170ac9b&scene=21#wechat_redirect")]),t._v(" "),_("h3",{attrs:{id:"缓存雪崩，穿透，击穿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩，穿透，击穿"}},[t._v("#")]),t._v(" 缓存雪崩，穿透，击穿")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("分别是什么")])])]),t._v(" "),_("blockquote",[_("p",[t._v("缓存雪崩就是举个例子,我现在有一批缓存,他们默认的缓存时间是24小时,到了24小时后统一过期,然后请求就会打到数据库,数据库就会挂掉,就是和没有缓存是一样的效果")])]),t._v(" "),_("blockquote",[_("p",[t._v("缓存穿透是指缓存和数据库中都没有的数据，而用户不断发起请求,举个例子,我现在数据库没有id = -1 这条数据,但是统一时间大量的用户请求过来,由于缓存中没有该数据,那就要走数据库查询,导致数据库挂掉")])]),t._v(" "),_("blockquote",[_("p",[t._v("缓存击穿不同的是缓存击穿是指一个Key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个Key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个完好无损的桶上凿开了一个洞")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("如何解决")])])]),t._v(" "),_("blockquote",[_("p",[t._v("处理缓存雪崩简单，在批量往Redis存数据的时候，把每个Key的失效时间都加个随机值就好了，这样可以保证数据不会在同一时间大面积失效，我相信，Redis这点流量还是顶得住的。")])]),t._v(" "),_("blockquote",[_("p",[t._v("对于缓存穿透来说我们要做的就是合理的参数校验,用户鉴权校验,还有就是从缓存取不到的数据，在数据库中也没有取到，这时也可以将对应Key的Value对写为null、位置错误、稍后重试这样的值具体取啥问产品，缓存有效时间可以设置短点,放到缓存中去,保护数据库,这样可以防止攻击用户反复用同一个id暴力攻击")])]),t._v(" "),_("p",[t._v("(此处停顿一会,面试官可能还会问你,还有什么别的办法吗?)")]),t._v(" "),_("p",[t._v("布隆过滤器")]),t._v(" "),_("blockquote",[_("p",[t._v("布隆过滤器可以用于检索一个元素是否在一个集合中。它的优点是空间效率和查询时间都远远超过一般的算法，缺点是有一定的误识别率和删除困难,我们可以把数据库数据放到布隆过滤器中,通过布隆过滤器可以明确知道某个查询数据库不存在，所以可以过滤掉无效的查询到数据库，减少数据库的压力")])]),t._v(" "),_("h3",{attrs:{id:"你了解redis的部署方式吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你了解redis的部署方式吗"}},[t._v("#")]),t._v(" 你了解Redis的部署方式吗?")]),t._v(" "),_("p",[t._v("这个和面试官说只是了解")]),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("主从切换模式")])])]),t._v(" "),_("blockquote",[_("p",[t._v("数据库方面的经典架构,主从架构,主数据库进行读写操作,当写操作导致数据变化时,会自动将数据同步到从数据库,从数据库一般是只读的,主从切换技术的方法是：当主服务器宕机后，需要"),_("strong",[t._v("手动")]),t._v("把一台从服务器切换为主服务器，这就需要人工干预，费事费力，还会造成一段时间内服务不可用")])]),t._v(" "),_("blockquote",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("主从切换+哨兵模式")])])]),t._v(" "),_("blockquote",[_("p",[t._v("哨兵模式是一种特殊的模式，他在原先的主从数据的模型上加入了哨兵节点,哨兵节点是用来实现自动化系统监控和故障恢复功能,主要负责的功能是")])]),t._v(" "),_("ol",[_("li",[t._v("监控主从数据库是否正常运行")]),t._v(" "),_("li",[t._v("主数据库出现故障时自动将从数据库转化为主数据库")])]),t._v(" "),_("blockquote",[_("p",[t._v("实现原理就是Redis提供了哨兵的命令，哨兵是一个独立的进程，作为进程，它会独立运行。哨兵通过发送命令，等待Redis服务器响应，从而监控运行的多个Redis实例.")])]),t._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://juejin.im/post/5dcaebea518825571f5c4ab0",target:"_blank",rel:"noopener noreferrer"}},[t._v("吊打面试官"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5cc165816fb9a03202221dd5",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式锁的实现"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);