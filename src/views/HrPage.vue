<template>
  <div>
    <zui-header>
      <logo type="hr" class="vivify swoopInLeft" href="/hr"/>
      <zui-button class="vivify shake delay-2000">提交租HR申请</zui-button>
    </zui-header>
    <page class="hr-page">
      <div class="banner vivify fadeIn duration-1000">
        <h3 class="vivify popInBottom delay-500 duration-1000">
          新项目上马，可团队还没凑齐！<br/>
          就缺1、2个岗位，养个全职HR完全没必要！<br/>
          亲自上，没渠道又琐碎，太浪费时间了！
        </h3>
      </div>
      <div class="service vivify flipInX delay-1000">
        <h1>
          来智筹，租个专业HR<br/>
          承担你的招聘职责
        </h1>
        <h3>
          自带渠道，马上开工！
        </h3>
        <h4>
          以租代雇 | 不占编制 | 自由合作 | 按月考核<br/>
          一周不满意全额退款
        </h4>
      </div>
      <ul class="features">
        <li>
          <img :src="feature1"/>
          <h4>成本更低</h4>
          <p>完成目标即可终止合作，不占编制</p>
        </li>
        <li>
          <img :src="feature1"/>
          <h4>不养全职</h4>
          <p>完成目标即可终止合作，不占编制</p>
        </li>
        <li>
          <img :src="feature1"/>
          <h4>马上工作</h4>
          <p>专享、共享，覆盖单一或多个岗位需求</p>
        </li>
        <li>
          <img :src="feature1"/>
          <h4>灵活租用</h4>
          <p>月租金最低只需全职1/3</p>
        </li>
        <li>
          <img :src="feature1"/>
          <h4>主动招聘</h4>
          <p>主动寻猎、主动说服人才面试入职</p>
        </li>
        <li>
          <img :src="feature1"/>
          <h4>渠道支持</h4>
          <p>覆盖全国过亿人才资源库，按需付费</p>
        </li>
      </ul>
      <div class="customer-case">
        <h2>租HR服务案例</h2>
        <p>横滑查看更多合作企业</p>
        <carousel class="customer-case-carousel">
          <slide class="item">
            <h3>北京某家政项目</h3>
            <div class="labels">
              <zui-label>岗位需求</zui-label>
              <zui-label>月租结果</zui-label>
            </div>
            <p>
              ToB销售岗位
            </p>
            <p>
              BOSS亲自招聘一个多月未果，租HR后，一个月入职2人，之后每隔2个月续租HR，扩大队伍。
            </p>
          </slide>
          <slide class="item">
            <h3>上海某外派项目</h3>
            <div class="labels">
              <zui-label>岗位需求</zui-label>
              <zui-label>月租结果</zui-label>
            </div>
            <p>
              前端、java等技术岗位
            </p>
            <p>
              项目负责人+行政招聘速度慢，租HR后，首月即完成到岗3人，顺利保障项目进度。
            </p>
          </slide>
          <slide class="item">
            <h3>杭州某汽配B2B电商项目</h3>
            <div class="labels">
              <zui-label>岗位需求</zui-label>
              <zui-label>月租结果</zui-label>
            </div>
            <p>
              产品、研发、UI等岗位
            </p>
            <p>
              只有创始团队，人事行政负责招聘，不专业进度慢，租HR后，1个月左右技术、运营部门逐渐成型。
            </p>
          </slide>
          <slide class="item">
            <h3>北京某新三板企业</h3>
            <div class="labels">
              <zui-label>岗位需求</zui-label>
              <zui-label>月租结果</zui-label>
            </div>
            <p>
              产品、运营等岗位
            </p>
            <p>
              新产品上线，招聘压力大。租2位HR后，配合公司全面开展招聘工作，完成计划，节省人力成本50%以上。
            </p>
          </slide>
          <slide class="item">
            <h3>北京某安防产品公司</h3>
            <div class="labels">
              <zui-label>岗位需求</zui-label>
              <zui-label>月租结果</zui-label>
            </div>
            <p>
              资深工程师
            </p>
            <p>
              需要高端岗位，公司招聘不能胜任。原计划用猎头，租HR后，1个半月招到，成本为猎头的1/10不到。
            </p>
          </slide>
        </carousel>
      </div>
      <div class="customer-case-logo">

      </div>
      <div class="apply-hr">
        <h2>
          我要租HR
        </h2>
        <h4>
          提交申请，免费定制招聘方案
        </h4>
      </div>
      <div class="apply-hr-form vivify shake">
        <zui-form>
          <zui-form-item label="姓名">
            <zui-input type="text"/>
          </zui-form-item>
          <zui-form-item label="手机">
            <zui-input type="tel"/>
          </zui-form-item>
          <zui-form-item label="岗位需求">
            <zui-input type="text"/>
          </zui-form-item>
          <zui-form-item label="公司名称">
            <zui-input type="text"/>
          </zui-form-item>
          <zui-form-item>
            <zui-button>提交</zui-button>
          </zui-form-item>
        </zui-form>
      </div>
    </page>
    <zui-footer/>
  </div>
</template>
<script>
  import './less/hr-page.less'
  import Page from '../components/Page'
  import Logo from '../components/Logo'
  import ZuiHeader from '../components/Header'
  import ZuiFooter from '../components/Footer'
  import ZuiForm from '../components/Form'
  import ZuiFormItem from '../components/FormItem'
  import ZuiInput from '../components/Input'
  import ZuiButton from '../components/Button'
  import ZuiLabel from '../components/Label'
  import feature1 from '../assets/img/feature1.svg'
  import feature2 from '../assets/img/feature2.svg'
  import feature3 from '../assets/img/feature3.svg'
  import feature4 from '../assets/img/feature4.svg'
  import feature5 from '../assets/img/feature5.svg'
  import feature6 from '../assets/img/feature6.svg'
  import { Carousel, Slide } from 'vue-carousel'
  export default{
    components: {
      Page,
      ZuiHeader,
      ZuiFooter,
      Logo,
      ZuiForm,
      ZuiFormItem,
      ZuiInput,
      ZuiButton,
      ZuiLabel,
      Carousel,
      Slide
    },
    data () {
      return {
        feature1: feature1,
        feature2: feature2,
        feature3: feature3,
        feature4: feature4,
        feature5: feature5,
        feature6: feature6
      }
    }
  }
</script>
