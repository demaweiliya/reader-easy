<template>
    <div class="menu-bar">
        <transition name="slide-up">
             <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
            <div class="icon-wrapper">
                <span class="iconfont icon-cloud-download"></span>
            </div>
             <div class="icon-wrapper">
                <span class="iconfont icon-font-colors" @click="showSetting"></span>
            </div>
             <div class="icon-wrapper">
                <span class="iconfont icon-font-size"></span>
            </div>
             <div class="icon-wrapper">
                <span class="iconfont icon-column-width"></span>
            </div>
        </div>
        </transition>

       <transition name="slide-up">
        <div class="setting-wrapper" v-show="ifSettingShow">
            <div class="setting-font-size">
                <div class="preview" :style="{fontSize:fontSizeList[0].fontSize + 'px'}">A</div>
                <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index" @click="setFontSize(fontSize)">
                    <div class="line"></div>
                    <div class="point-wrapper">
                        <div class="point" v-show="defaultFontSize === item.fontSize">
                            <div class="small-point"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize + 'px'}">A</div>
            </div>
        </div>
       </transition>
    </div>
</template>

<script>
export default {
    props:{
        ifTitleAndMenuShow:Boolean,
        fontSizeList:Array,
        defaultFontSize:Number
    },
    data(){
        return {
            ifSettingShow:false
        }
    },
    methods:{
        showSetting(){
            this.ifSettingShow = true;
        },
        hideSetting(){
            this.ifSettingShow = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
   
    .menu-bar{
        .setting-wrapper{
            position: absolute;
            bottom: px2rem(48);
            left: 0;
            width: 100%;
            height: px2rem(60);
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
            z-index: 101;
            background: #fff;
            .setting-font-size{
                display: flex;
                height: 100%;
                .preview{
                    flex: 0 0 px2rem(40);
                    @include center;
                }
                .select-wrapper{
                    flex:1;
                    display: flex;
                    align-items: center;
                    .line{
                        flex:1;
                        height: 0;
                        border-top: px2rem(1) solid #ccc;
                    }

                    .point-wrapper{
                        position: relative;
                        flex:0 0 0;
                        width: 0;
                        height: px2rem(7);
                        border-left:px2rem(1) solid #ccc;
                        .point {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 20px;
                            height: 20px;
                            margin: px2rem(-8) 0 0 px2rem(-10);
                            border-radius: 50%;
                            background: #fff;
                            border: px2rem(1) solid #ccc;
                            box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,.15);
                            @include center;
                            .small-point {

                                width: px2rem(5);
                                height: px2rem(5);
                                background: #000;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
          .menu-wrapper{
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 101;
            width: 100%;
            height: px2rem(48);
            background: #fff;
            display: flex;
            box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
            .icon-wrapper{
                flex:1;
                @include center;
                .iconfont{
                    font-size: 22px;
                }
            }
           
        }
      
    }
</style>
