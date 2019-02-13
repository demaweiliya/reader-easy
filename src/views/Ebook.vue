<template>
    <div class="ebook">
        <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"/>
        <div class="read-wrapper">
            <div id="read"></div>
            <div class="mask">
                <div class="left" @click="prevPage"></div>
                <div class="center" @click="toggleTitleAndMenu"></div>
                <div class="right" @click="nextPage"></div>
            </div>
        </div>
        <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" 
                  :fontSizeList="fontSizeList"
                  :defaultFontSize="defaultFontSize" 
                  ref="MenuBar"/>
    </div>
</template>

<script>
import Epub from 'epubjs'
const DOWMLOAD_URL = '/2018_Book_DeliberativePublicEngagementWi.epub'

import TitleBar from '@/components/TitleBar';
import MenuBar from '@/components/MenuBar';
global.ePub = Epub;
export default {
    data(){
        return {
            ifTitleAndMenuShow:false,
            fontSizeList:[
                {fontSize:12},
                {fontSize:14},
                {fontSize:16},
                {fontSize:18},
                {fontSize:20},
                {fontSize:22},
                {fontSize:24},
            ],
            defaultFontSize:18
        }
    },
    methods:{
        showEpub(){
            //生成book
            //生成rendition
            this.book = new Epub(DOWMLOAD_URL);
            this.rendition = this.book.renderTo('read', {
                width:window.innerWidth,
                height:window.innerHeight
            })
            this.rendition.display()
        },
        prevPage(){
            if(this.rendition){
                this.rendition.prev();
            }
        },
        nextPage(){
            if(this.rendition){
                this.rendition.next();
            }
        },
        toggleTitleAndMenu(){
            this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
            if(!this.ifTitleAndMenuShow){
                this.$refs.MenuBar.hideSetting();
            }
        }
    },
    mounted(){
        this.showEpub();
    },
    components:{
        TitleBar,
        MenuBar
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.ebook{
    position: relative;
    .read-wrapper{
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            height: 100%;
            display: flex;
            .left{
                flex: 0 0 px2rem(100);
            }
            .center{
                flex:1;
            }
            .right{
                flex:0 0 px2rem(100);
            }
        }
    }
   
}
</style>
