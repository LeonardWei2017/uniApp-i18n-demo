<template>
        <view class="uni-content">  
				<view>{{user_bing.bindPhoneNumber}} : {{user_bing.bindPhoneNumber}}</view>  
				<view style="margin-top:15px">{{user_bing.bindPhoneNumberForFirstLogin}} : {{user_bing.bindPhoneNumberForFirstLogin}}</view>  
				<view style="margin-top:15px">{{user_bing.needAuthorization}} : {{user_bing.needAuthorization}}</view>  
				<view style="margin-top:15px">{{user_bing.pleaseselectlanguage}} : {{user_bing.pleaseselectlanguage}}</view>  
				
				<button style="margin-top: 15px;" type="primary" @tap="up">上一页</button>
				<button style="margin-top: 15px;" type="primary" @tap="gouserbing">跳转到下一页</button>
			
        </view>  
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
    data() {
        return {
            user_bing : {},
        };
    },
    onLoad:function(){
		
		this._i18n.locale = uni.getStorageSync('locale') || this.locale
		// this.array = uni.getStorageSync('array') ||this.array
        this.user_bing = this._i18n.getLanguage().userbinding;
		// console.log(this._i18n);
    },
	watch:{
		// locale(newVal,oldval){
		// 	this._i18n.locale = newVal
		// 	this.user_bing= this._i18n.locales[newVal].userbindin
		// }
	},
	computed: {  
			...mapState(["locale"]),
		},
		
	methods:{
		 ...mapMutations(["changestate"]),
		changeLanage(){
			// this.changestate()
		},
		gouserbing(){
			uni.navigateTo({
				url: '../myindex/myindex'
			});
		},
		up(){
			uni.navigateTo({
				url: '../myhome/myhome'
			});
		},
	}
}
</script>

<style>

</style>