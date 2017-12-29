<template>
  <div>
    <zui-header>
      <logo type="zhichou" href="/"></logo>
    </zui-header>
    <page class="home-page">
      <div class="banner vivify fadeIn">
        <h1 class="vivify popIn">来智筹，让全世界牛人为我所用</h1>
        <h3 class="vivify popIn">专注“互联网+灵活雇佣”解决企业用人需求</h3>
      </div>
      <div class="nav clear">
        <a class="zhichou vivify popIn" href="http://static.zhichou.com/#/task">
          <div class="watermark blue">租牛人</div>
          <logo type="zhichou"></logo>
          <h3>租牛人解决企业难题</h3>
          <h4>月租·任务租·单次咨询</h4>
        </a>
        <a class="hr vivify popIn delay-200" href="/hr">
          <div class="watermark green">招聘</div>
          <logo type="hr"></logo>
          <h3>租个HR招聘全职人才</h3>
          <h4>灵活·专业·快速·低价</h4>
        </a>
        <a class="plus vivify popIn delay-400" href="/plus">
          <div class="watermark blue">顾问</div>
          <logo type="plus"></logo>
          <h3>定向寻猎实战顾问</h3>
          <h4>快速引荐·5种落地方式</h4>
        </a>
      </div>
      <a class="join-zhichou" href="http://wx.zhichou.com/#/me/resume">
        我是牛人，入驻智筹 >>
      </a>
    </page>
    <zui-footer/>
  </div>
</template>
<script>
  import './less/home-page.less'
  import Logo from '../components/Logo'
  import Page from '../components/Page'
  import ZuiHeader from '../components/Header'
  import ZuiFooter from '../components/Footer'
  export default{
    components: {Page, Logo, ZuiHeader, ZuiFooter}
  }
</script>
