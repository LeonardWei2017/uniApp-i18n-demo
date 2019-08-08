<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<view>{{i18n.hello}}</view>
			<view>{{i18n.common.hello}}</view>
		</view>
		
		<button type="primary" @tap="go">
			跳转
		</button>
	</view>
</template>

<script src="./main.js"></script>

<style lang="scss" src="./style.scss"></style>
