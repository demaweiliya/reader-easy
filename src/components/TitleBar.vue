<template>
     <transition name="slide-down">
            <div class="title-wrapper" v-show="ifTitleAndMenuShow">
            <div class="left">
                <span class="iconfont icon-left"></span>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="iconfont icon-setting"></span>
                </div>

                 <div class="icon-wrapper">
                    <span class="iconfont icon-menu"></span>
                </div>

                 <div class="icon-wrapper">
                    <span class="iconfont icon-user"></span>
                </div>
            </div>
        </div>
       </transition>
</template>

<script>
export default {
    props:{
        ifTitleAndMenuShow:Boolean
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
      .title-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 101;
        width: 100%;
        height: px2rem(48);
        background: #fff;
        display: flex;
        box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
        .left{  
            flex: 0 0 px2rem(60);
            @include center;
        }
        .right{
            flex:1;
            display: flex;
            justify-content: flex-end;
            .icon-wrapper{
                flex: 0 0 px2rem(40);
                @include center;
                .iconfont{
                    font-size: px2rem(22);
                }
            }
        }
    }
</style>
