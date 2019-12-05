// 统一处理返回信息
const resHandler = () => {
  // 处理请求成功方法
  const render = ctx => {
    return (data, msg) => {
      return {
        code: 2,
        data: data,
        msg: msg || '请求成功'
      }
    }
  }

  // 处理请求失败方法
  const renderError = ctx => {
    return (code, msg) => {
      return {
        code: code,
        data: null,
        msg: msg || '请求失败'
      }
    }
  }

  return async (ctx, next) => {
    ctx.send = render(ctx);
    ctx.sendError = renderError(ctx);
    await next()
  }
}

module.exports = resHandler
