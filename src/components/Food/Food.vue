<template>
  <div class="food" style="">
    <div class="food-content">
      <div class="image-header" style="pointer-events: auto;">
        <img data-src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
             src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
             lazy="loaded">
        <div class="back">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>
      <div class="content" style="pointer-events: auto;">
        <h1 class="title">南瓜粥</h1>
        <div class="detail">
          <span class="sell-count">月售91份</span>
          <span class="rating">好评率100%</span>
        </div>
        <div class="price">
          <span class="now">￥9</span>
          <span class="old" style="display: none;">￥</span>
        </div>
        <div class="cartcontrol-wrapper">
          <div class="cartcontrol">
            <div class="iconfont icon-remove_circle_outline" style="display: none;"></div>
            <div class="cart-count" style="display: none;"></div>
            <div class="iconfont icon-add_circle"></div>
          </div>
        </div>
      </div>
      <div class="split" style="pointer-events: auto;"></div>
      <div class="info" style="pointer-events: auto;">
        <h1 class="title">商品信息</h1>
        <p class="text">主、辅料:水、大米、南瓜、冰糖等</p>
      </div>
      <div class="split" style="pointer-events: auto;"></div>
      <div class="rating" style="pointer-events: auto;">
        <h1 class="title">商品评价</h1>
        <div class="ratingselect">
          <div class="rating-type border-1px">
            <span class="block positive active">全部
              <span class="count">3</span>
            </span>
            <span class="block positive">推荐
              <span class="count">2</span>
            </span>
            <span class="block negative">吐槽
              <span class="count">1</span>
            </span>
          </div>
          <div class="switch on">
            <span class="iconfont icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <div class="rating-wrapper">
          <ul>
            <li class="rating-item bottom-border-1px">
              <div class="user"><span class="name">3******c</span>
                <img width="12" height="12" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" class="avatar"></div>
              <div class="time">21:52:44</div>
              <p class="text">
                <span class="iconfont icon-thumb_up"></span>
                很喜欢的粥
              </p></li>
          </ul>
          <div class="no-rating" style="display: none;">暂无评价</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "food"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff

    &.move-enter-active, &.move-leave-active
      transition: all .2s linear
    &.move-enter, &.move-leave-active
      opacity 0
      transform: translate3d(100%, 0, 0)

    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_left
          display: block
          padding: 10px
          font-size: 20px
          color: #fff

    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: $green
        &.fade-transition
          transition: all 0.2s
          opacity: 1
        &.fade-enter, &.fade-leave
          opacity: 0
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right: 4px
              line-height: 16px
              font-size: 12px
            .icon-thumb_up
              color: $yellow
            .icon-thumb_down
              color: rgb(147, 153, 159)

        .no-rating
          padding: 16px 0
          font-size: 12px
          color: rgb(147, 153, 159)
</style>

