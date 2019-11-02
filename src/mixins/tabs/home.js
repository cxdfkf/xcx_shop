import wepy from 'wepy'
export default class Home extends wepy.mixin {
  data = {
    //轮播图数据
    swiperData: [],
    //分类数据
    cateData: [],
    //楼层数据
    floorData: []
  }

  config = {
  }

  methods = {

  }
  //获取轮播图的数据
  async getSwiper () {
    const { data } = await wepy.get('/home/swiperdata')
    if (data.meta.status != 200) {
      return wepy.baseToast()
    }
    this.swiperData = data.message
    this.$apply()
    wepy.baseToast('获取数据成功', 'success')
  }
  //获取分类数据
  async  getcateData () {
    const { data } = await wepy.get('/home/catitems')
    // console.log(data);

    if (data.meta.status != 200) {
      return wepy.baseToast()
    }
    this.cateData = data.message
    this.$apply()
  }
  //获取楼层数据
  async  getfloorData () {
    let { data } = await wepy.get('/home/floordata')
    if (data.meta.status != 200) {
      return wepy.baseToast()
    }
    // console.log(data);

    this.floorData = data.message
    this.$apply()
  }
  onLoad () {
    this.getSwiper()
    this.getcateData()
    this.getfloorData()
  }
}
