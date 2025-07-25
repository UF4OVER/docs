<template><div><h1 id="关于play-home基础-新手需要了解的东西" tabindex="-1"><a class="header-anchor" href="#关于play-home基础-新手需要了解的东西"><span>关于Play Home基础，新手需要了解的东西</span></a></h1>
<h2 id="一、游戏基本构成" tabindex="-1"><a class="header-anchor" href="#一、游戏基本构成"><span>一、游戏基本构成</span></a></h2>
<p>包括如下部分：</p>
<ol>
<li><strong>游戏本体</strong></li>
<li><strong>游戏的DLC、特典等</strong>：不解释太多，你认为就是游戏升级包、补丁就行了，修复错误或提供新功能</li>
<li><strong>外部工具</strong>：游戏以外的工具，比如IPA、PlayHome32bit_WideSliderPatch等游戏文件夹里面的扩展名为exe的文件，大多是粘贴进去后，运行一次，或者新装插件时需要运行一次，平时不用管它</li>
<li><strong>游戏插件</strong>：n多牛人在游戏本体基础上编写出来的插件，大多是在游戏里面使用，大多需要用各种快捷键在游戏中调出，实现游戏本体不能实现的功能</li>
<li><strong>Mod</strong>：包括发型、饰品、服装、鞋子、内衣等等，基本上涵盖捏人界面里面的各种东西。注意！如果你的游戏里面没有导入这些，只是下载了个人物存档或者服装存档，是不会出现这些东西的！！</li>
<li><strong>人物存档、服装存档</strong>：就是个PNG文件，但不是随意的png文件，而是游戏里面用特定功能保存下来的png文件，所以不要再问为什么花酱油买人物，人家却给了你个图片，或者是为什么把png文件放进去了却没出现人物一类的问题了。</li>
</ol>
<blockquote>
<p>本质上，这个png文件其实就是一堆参数，包括人物形象的各种参数（所以你把它放到HS里面是不行的），以及服装等mod的ID（所以这里面提取不出来mod）</p>
</blockquote>
<h2 id="二、外部工具使用方法" tabindex="-1"><a class="header-anchor" href="#二、外部工具使用方法"><span>二、外部工具使用方法</span></a></h2>
<p>前面提到这个类别了，这类工具大多是双击运行，然后在弹出来的框里面按照提示操作，比如PlayHome32bit_WideSliderPatch，运行完毕它就自己关闭了，其实它已经发挥作用了，确切的不说了，小白们知道这个就行了，有兴趣的可以去看对应工具的readme文件</p>
<h2 id="三、插件安装方法" tabindex="-1"><a class="header-anchor" href="#三、插件安装方法"><span>三、插件安装方法</span></a></h2>
<p>几乎所有插件的安装方法都一样：</p>
<ol>
<li>把插件文件（dll文件）放到plug文件夹里面</li>
<li>把游戏执行文件拖到IPA文档上（屏幕上弹出来个黑色的东西，然后闪了闪就消失了，就应该这样！！）</li>
<li>运行一次PlayHome64bit (Patch &amp; Launch)，然后插件应该就起作用了</li>
</ol>
<blockquote>
<p>其实大多数小白入坑都是下载的整合版，很多时候，只需要做到第一步和第三步就可以了，不过建议还是每次都这么弄把，免得又是各种不懂……</p>
</blockquote>
<p>插件在游戏里面大多需要各种快捷键才能用，所以，看看插件的readme文件，至少你得把快捷键弄明白把……</p>
<h2 id="四、比较重要的几个文件夹和文件" tabindex="-1"><a class="header-anchor" href="#四、比较重要的几个文件夹和文件"><span>四、比较重要的几个文件夹和文件</span></a></h2>
<ol>
<li><strong>UserData</strong>：这里面你的游戏设置、各种存档、背景等等都在这里，重装之前，一定记得把这个文件夹保存好</li>
<li><strong>UserData里面的modprefs.ini文件</strong>：你可以双击打开，里面有大多数插件的快捷键，和参数设置，没事不要乱改，但你可以逐个在游戏里面尝试</li>
<li><strong>Plugins文件夹</strong>：插件保存的地方，也有部分插件的配置文档（DHH的鞋子参数设置、动作参数设置等）等都在里面，你可以保存，但是重装游戏时是不是要覆盖过去，你得自己琢磨，因为有可能你的插件是老版本，而下载了个新的整合包时，可能反倒你给插件降级了。但是里面的几个文件夹倒是可以直接贴过去</li>
<li><strong>abdata文件夹</strong>：mod在游戏中保存的位置，不过不建议小白点进去乱动，如果你自己装过mod，且没有留备份，新装游戏时，可以考虑覆盖过去</li>
</ol>
<blockquote>
<p>但是，如果你把前面这几个文件夹全都备份了，然后新装游戏都覆盖过去了，那基本上相当于除了游戏本体外，所有原来的东西都覆盖成老的了，那你没事闲的还重装啥啊？问题很大概率还是原来的问题！！！！所以，建议大家用Mod管理工具来装新东西，出问题了，删除回去一个步骤，大多数情况就不用重装了。</p>
</blockquote>
<h2 id="五、常见问题" tabindex="-1"><a class="header-anchor" href="#五、常见问题"><span>五、常见问题</span></a></h2>
<ol>
<li>游戏里面调用各种东西的快捷键都必须是英文输入法！！！</li>
</ol>
<h2 id="六、几个基本建议" tabindex="-1"><a class="header-anchor" href="#六、几个基本建议"><span>六、几个基本建议</span></a></h2>
<ol>
<li>不论下载了什么，看看readme文档，那里面有几乎全部重要的东西</li>
<li>先按论坛里的说明或者readme做完了，看看好用不好用再问，反正你也不关心原理，只是想玩不是，好用了就行了，真的弄明白主要得靠自己摸索</li>
<li>把游戏里面各种按钮都点一遍，如果是用的整合版，把键盘输入法切换成英文，把键盘上所有按钮都按一遍，你就会发现一堆说明、插件等等</li>
<li>对于第三方插件带来的功能，有bug是正常的！！注意，是有bug正常！！毕竟是第三方编写的，怀着感恩的心态使用，比如pot这种插件，牵涉很多游戏底层的东西，有些效果不好很正常，而如果没有这个插件根本就没有多少mod可用，对比一下，你觉得有了更好还是没有更好？？</li>
</ol>
<figure><img src="https://zycs-img-c5u.pages.dev/v2/0SvXlBD.jpeg" alt="887bf55cecbdce26d38a43bc4fadd029.jpg" tabindex="0" loading="lazy"><figcaption>887bf55cecbdce26d38a43bc4fadd029.jpg</figcaption></figure>
</div></template>


