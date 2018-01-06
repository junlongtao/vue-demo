<template>
  <page class="plus-page">
    <zui-header>
      <logo type="zhichou" href="/plus"/>
      <span class="zui-logo-line"></span>
      <logo type="plus" href="/plus"/>
      <zui-button @click="onButtonClick">了解更多</zui-button>
    </zui-header>
    <section class="banner vivify fadeIn duration-1000">
      <div class="vivify popInBottom delay-100 duration-1000">
        <h5>
          融资、传统转型、资本化、战略优化、O2O、财税法律
          合伙人、招聘、外包、人工智能、做APP
          线上推广、自媒体、社群营销、招商加盟
          ……
        </h5>
        <h1>企业短板，需牛人助力！</h1>
        <h4>猎头引荐，包年服务费用仅需1%</h4>
      </div>
    </section>
    <section class="mobile-banner">
      <img :src="mbanner"/>
    </section>
    <section class="features">
      <h3>【智筹•顾问+】</h3>
      <h1>定向“寻猎”实战顾问</h1>
      <ul class="clear">
        <li>
          <div class="big">100%</div>
          <div>精选</div>
          <div class="black">实战牛人</div>
        </li>
        <li>
          <div class="big">100</div>
          <div>位牛人</div>
          <div class="black">按需引荐</div>
        </li>
        <li>
          <div class="big">20</div>
          <div>人次</div>
          <div class="black">免费咨询</div>
        </li>
      </ul>
      <div class="ribbon">
        精准匹配 · 自由合作 · 30天无风险退款
      </div>
    </section>
    <div class="more-features">
      <ul>
        <li>
          <img :src="feature8"/>
          <b>9</b>万精选实战牛人<br/>
          猎头背景运营团队，从上亿人才资源筛选
        </li>
        <li>
          <img :src="feature9"/>
          <b>9</b>类渠道定向寻猎<br/>
          资源不够时，立即启动所有猎头手段
        </li>
        <li>
          <img :src="feature10"/>
          <b>90</b>组维度精细匹配<br/>
          大数据算法+人工沟通评估推荐
        </li>
        <li>
          <img :src="feature11"/>
          <b>Top10%</b>实战牛人<br/>
          不一定有名气，但一定懂实战
        </li>
        <li>
          <img :src="feature12"/>
          <b>5</b>种与牛人合作落地方式<br/>
          咨询、月租、外包、培训等自主确定
        </li>
        <li>
          <img :src="feature13"/>
          <b>1</b>对1跟踪服务<br/>
          建档跟进，结合投资人视角预测需求
        </li>
        <li>
          <img :src="feature14"/>
          <b>3</b>类服务套餐<br/>
          满足常年、临时、行业定制的不同场景
        </li>
      </ul>
    </div>
    <div class="package">
      <h1>【智筹•顾问+】A套餐</h1>
      <ul>
        <li>100人次按需引荐，免猎头费</li>
        <li>20个不同需求，即20批次定向寻猎</li>
        <li>最快2小时极速推荐</li>
        <li>20人次牛人免费咨询（价值4万元）</li>
        <li>建档跟进，智库管家一对一服务</li>
        <li>加入CEO高管社群，人脉资源共享</li>
        <li>有效期12个月</li>
        <li>30天内无忧退款</li>
      </ul>
      <p>（另有B套餐及单次服务套餐可选，详询客服）</p>
    </div>
    <customer-case>
      <h2>【智筹·顾问+】会员案例</h2>
      <p>横滑查看更多合作企业</p>
      <carousel class="customer-case-carousel" :perPage="carouselPerPage">
        <slide class="customer-case-carousel-item">
          <h3>某互联网+建筑公司</h3>
          <h5>收入千万以上</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+月租5位合作
            </p>
            <p>
              收入年增长100%以上，团队实力大增
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某大数据行业方案厂商</h3>
          <h5>上市公司</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+咨询行业方案
            </p>
            <p>
              确定新进市场方案（铁路轨道缺陷检测及预警），拿下典型客户
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某互联网医疗项目</h3>
          <h5>C轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+产品设计顾问
            </p>
            <p>
              引入全国top 10 EDC专家，全程参与产品设计，获得市场高度认可
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某移动安全公司</h3>
          <h5>B+轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+兼职转全职
            </p>
            <p>
              市场品牌咨询切入，发展为全职市场VP，为公司打开新局面
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某人力资源SAAS产品</h3>
          <h5>Pre-A轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人 + 顾问转全职
            </p>
            <p>
              引荐资深产品经理做顾问，带领团队按预期推出产品，引入新一轮投资，顾问最终转全职
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某电商淘品牌</h3>
          <h5>收入过亿</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+CEO私教
            </p>
            <p>
              由关注流量获取转化到理解品牌溢价的背后逻辑，找到品牌成长路径
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某互联网+陶瓷项目</h3>
          <h5>Pre-A轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+兼职转合伙人
            </p>
            <p>
              从技术运维一团乱麻，变为发展思路清晰，并最终成为合伙人
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某互联网 + 法律项目</h3>
          <h5>天使轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+技术外包/融资顾问
            </p>
            <p>
              产品半个月确定设计，三个月成功上线，六个月拿到机构投资
            </p>
          </div>
        </slide>
        <slide class="customer-case-carousel-item">
          <h3>某移动打印项目</h3>
          <h5>A轮</h5>
          <div class="labels">
            <zui-label>“顾问+”方式</zui-label>
            <zui-label>结果</zui-label>
            <p>
              按需引荐牛人+顾问/外包/合资
            </p>
            <p>
              引荐资深顾问，1个月确定产品，4个月推出软硬件产品；引入资深PR，轻团队快速铺开市场
            </p>
          </div>
        </slide>
      </carousel>
    </customer-case>
    <div class="apply-coupon">
      <h2>
        想试试？立即领取<span class="yellow">单次体验券</span>
      </h2>
      <h4>
        持券即可免费体验 “定向寻猎” 服务1次
      </h4>
    </div>
    <div class="apply-coupon-form">
      <zui-form>
        <zui-form-item label="姓名">
          <zui-input type="text" v-model="form.truename"/>
        </zui-form-item>
        <zui-form-item label="手机">
          <zui-input type="tel" v-model="form.mobile"/>
        </zui-form-item>
        <zui-form-item>
          <zui-button @click="onApplyClick">提交</zui-button>
        </zui-form-item>
      </zui-form>
    </div>
    <zui-footer/>
  </page>
</template>
<script type="text/babel">
  import './less/plus-page.less'
  import Page from '../components/Page'
  import Logo from '../components/Logo'
  import ZuiLabel from '../components/Label'
  import ZuiHeader from '../components/Header'
  import ZuiFooter from '../components/Footer'
  import ZuiForm from '../components/Form'
  import ZuiFormItem from '../components/FormItem'
  import ZuiInput from '../components/Input'
  import ZuiButton from '../components/Button'
  import CustomerCase from '../components/CustomerCase'
  import {Carousel, Slide} from 'vue-carousel'
  import feature8 from './img/feature8.svg'
  import feature9 from './img/feature9.svg'
  import feature10 from './img/feature10.svg'
  import feature11 from './img/feature11.svg'
  import feature12 from './img/feature12.svg'
  import feature13 from './img/feature13.svg'
  import feature14 from './img/feature14.svg'
  import banner from './img/plus-banner.jpg'
  import mbanner from './img/plus-banner-mobile.svg'
  import FeedbackService from '../services/FeedbackService'
  import Util from '../Util'
  export default{
    components: {
      Page,
      Logo,
      ZuiForm,
      ZuiFormItem,
      ZuiInput,
      ZuiButton,
      ZuiHeader,
      ZuiFooter,
      ZuiLabel,
      CustomerCase,
      Carousel,
      Slide
    },
    data () {
      return {
        form: {
          truename: '',
          mobile: ''
        },
        banner: banner,
        mbanner: mbanner,
        feature8: feature8,
        feature9: feature9,
        feature10: feature10,
        feature11: feature11,
        feature12: feature12,
        feature13: feature13,
        feature14: feature14,
        carouselPerPage: (Util.os.android || Util.os.iPhone) ? 1 : 2
      }
    },
    methods: {
      onApplyClick: function (e) {
        const {truename, mobile} = this.form
        if (!truename || !mobile) {
          this.$store.commit('toast', '请填写姓名和手机号')
          return false
        }

        FeedbackService.create({
          truename: truename,
          mobile: mobile,
          content: '申请顾问加单次体验券, 姓名:' + truename + '\n' +
          '手机号:' + mobile
        }, (res) => {
          this.$store.commit('toast', '提交成功, 智筹将在1个工作日内联系您')
        })
      },
      onButtonClick: function (e) {
        window.scrollTo(0, document.body.scrollHeight)
      }
    }
  }
</script>
