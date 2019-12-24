(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("blockquote",[e("p",[a._v("这块也是被问烂的")])]),a._v(" "),e("h3",{attrs:{id:"hashmapd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmapd"}},[a._v("#")]),a._v(" HashMapd")]),a._v(" "),e("blockquote",[e("p",[a._v("HashMap 可以说是博大精深,必须熟练度加加加,通常位置也是集中在这两块,扩容方面和线程安全问题")])]),a._v(" "),e("blockquote",[e("ol",[e("li",[a._v("介绍HashMap\nHashMap通常会用一个指针数组（假设为table[]）来做分散所有的key，当一个key被加入时，会通过Hash算法通过key算出这个数组的下标i，然后就把这个<key, value>插到table[i]中，如果有两个不同的key被算在了同一个i，那么就叫冲突，又叫碰撞，这样会在table[i]上形成一个链表")])])]),a._v(" "),e("p",[a._v("所以，Hash表的尺寸和容量非常的重要。一般来说，Hash表这个容器当有数据要插入时，都会检查容量有没有超过设定的thredhold，如果超过，需要增大Hash表的尺寸，但是这样一来，整个Hash表里的无素都需要被重算一遍。这叫rehash，这个成本相当的大")]),a._v(" "),e("p",[a._v("1.7 数组 + 链表\n1.8 数组 + 链表 + 红黑树")]),a._v(" "),e("p",[a._v("链表 长度 >=  8\n为什么是 8")]),a._v(" "),e("blockquote",[e("ol",{attrs:{start:"2"}},[e("li",[a._v("存在的问题\n1.7\n![酷克]](https://coolshell.cn/articles/9606.html)\n形成环的过程痛苦\n1.8")])])]),a._v(" "),e("blockquote",[e("ol",{attrs:{start:"3"}},[e("li",[a._v("如何解决\n1.7")])])]),a._v(" "),e("p",[a._v("1.8")]),a._v(" "),e("blockquote",[e("p",[a._v("线程安全问题\n个人觉得 HashMap 在并发时可能出现的问题主要是两方面,首先如果多个线程同时使用put方法添加元素，而且假设正好存在两个 put 的 key 发生了碰撞(根据 hash 值计算的 bucket 一样)，那么根据 HashMap 的实现，这两个 key 会添加到数组的同一个位置，这样最终就会发生其中一个线程的 put 的数据被覆盖。第二就是如果多个线程同时检测到元素个数超过数组大小* loadFactor ，这样就会发生多个线程同时对 Node 数组进行扩容，都在重新计算元素位置以及复制数据，但是最终只有一个线程扩容后的数组会赋给 table，也就是说其他线程的都会丢失，并且各自线程 put 的数据也丢失。")])]),a._v(" "),e("p",[a._v("当多个线程同时检测到总数量超过门限值的时候就会同时调用resize操作，各自生成新的数组并rehash后赋给该map底层的数组table，结果最终只有最后一个线程生成的新数组被赋给table变量，其他线程的均会丢失。而且当某些线程已经完成赋值而其他线程刚开始的时候，就会用已经被赋值的table作为原始数组，这样也会有问题。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("初始容量为什么要是2的指数次幂\n13 -- 16\n7 -- 8\nhash%length == hash & (length-1) length == 2的指数次幂\n加快效率\nhashcode 0001 0001 1100 0111\n16       0000 0000 0000 1111 (0-15) 保证在数据区间范围内")])]),a._v(" "),e("li",[e("p",[a._v("加载因子为什么不是0.75\n如果是定位1,最大化利用空间,但是是不可能的,\n如果是0.5,查询效率很高,但是容易扩容,容易占空间")])]),a._v(" "),e("li",[e("p",[a._v("红黑树的长度为什么是8\n根据概率统计定律泊松分布,在负载因子在0.75的时候,定位到同一个桶里的概率很小所以此时树化是最佳时机")])]),a._v(" "),e("li",[e("p",[a._v("Jdk1.7 并发出现死环")])])]),a._v(" "),e("p",[a._v("解决: 1.8解决\n2组指针,高低位 一种高位 一种低位\n高位指向头部\n低位指向尾部")]),a._v(" "),e("p",[a._v("1010 0101 0101 0100\n0000 0000 0000 1000")]),a._v(" "),e("p",[a._v("存在这两种结果\n0000 0000 0000 1000 16 高位指针\n0000 0000 0000 0000 0  低位指针")]),a._v(" "),e("p",[a._v("低位不动,高位j+长度\n没有重新Rehash();链表的长度也减小了")]),a._v(" "),e("p",[a._v("能否解决线程安全问题")]),a._v(" "),e("h1",{attrs:{id:"concurrenthashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[a._v("#")]),a._v(" ConcurrentHashMap")]),a._v(" "),e("blockquote",[e("p",[a._v("提到ConcurrentHashMap多半是因为HashMap是线程不安全的,这时你可以试着说下HashMap为什么是线程不安全的")])]),a._v(" "),e("ol",[e("li",[a._v("为什要用ConcurrentHashMap")])]),a._v(" "),e("blockquote",[e("p",[a._v("用ConcurrentHashMap多半是因为HashMap是不安全的,在高并发的情况下存在线程安全问题,上面我们讲到了")])])])}),[],!1,null,null,null);t.default=n.exports}}]);