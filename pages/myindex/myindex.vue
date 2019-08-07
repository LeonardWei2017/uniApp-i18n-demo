<template>
        <view class="uni-content">  
				<view>{{Myindex.balance}} ：{{Myindex.balance}}</view>  
				<view style="margin-top:15px">{{Myindex.signOut}}：{{Myindex.signOut}}</view>  
				<view style="margin-top:15px">{{Myindex.cancel}}：{{Myindex.cancel}}</view>  
				<view style="margin-top:15px">{{Myindex.confirm}}：{{Myindex.confirm}}</view>  
				<button style="margin-top:15px" type="primary" @tap="changeLanage">{{Myindex.langSelect}}</button>
        </view>  
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
    data() {
        return {
            Myindex : {},
        };
    },
    onLoad:function(){
		
		this._i18n.locale = uni.getStorageSync('locale') || this.locale
		// this.array = uni.getStorageSync('array') ||this.array
        this.Myindex = this._i18n.getLanguage().myindex;
		// console.log(this._i18n);
    },
	watch:{
		locale(newVal,oldval){
			this._i18n.locale = newVal
			this.Myindex= this._i18n.locales[newVal].myindex
			console.log(newVal);
			console.log(this.T_D);	
		}
	},
	computed: {  
			...mapState(["locale"]),
		},
		
	methods:{
		 ...mapMutations(["changestate"]),
		changeLanage(){
			uni.navigateTo({
				url: '../userbing/userbing'
			});
		}
	}
}
</script>

<style>

</style>