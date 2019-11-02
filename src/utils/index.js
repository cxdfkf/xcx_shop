import wepy from 'wepy'

const baseURL = 'https://uinav.com/api/public/v1'

//提示信息
wepy.baseToast = function (title = "获取数据失败", icon = "none") {
  wepy.showToast({
    title,
    icon
  })
}

//get请求

wepy.get = function (path, data = {}) {
  //要有return，否则返回的是undefined
  return wepy.request(
    {
      url: baseURL + path,
      data
    }
  )
}

//post请求

wepy.post = function (path, data = {}) {
  return wepy.request(
    {
      url: baseURL + path,
      data,
      method: "post"
    }
  )
}