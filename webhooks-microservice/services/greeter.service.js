"use strict";
const URL="https://roopesh-dyte.herokuapp.com"
const axios=require('axios')
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "webhooks",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		list: {
			rest: {
				method: "GET",
			},
			
			

			async handler() {
				
				async function get_data(){
					const result=await axios.get(URL)
					return result
				}

				let data=await get_data()
				// console.log(data)
				return data.data
				
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		register: {
			rest: "/register",
			params: {
				targetUrl: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				let data={
					targetUrl:ctx.params.targetUrl
				}
				
				async function post_data(){
					// console.log(URL,data)
					const result=await axios.post(URL,data)
					// console.log("Inner result",result)
					return result.data
				}
				let result=await post_data()
				// console.log(result.data)
				return result._id;
			}
		},
		trigger:{
			rest:"/trigger",
			params:{
				ipAddress:"string"
			},

			async handler(ctx){
				
				async function get_data(){
					const result=await axios.get(URL)
					return result
				}

				let data=await get_data()
				let URLs=[]
				// console.log("time",Math.round((new Date()).getTime() / 1000),ctx.params.ipAddress)

				data.data.forEach(async(ele)=>{
					URLs.push(ele.targetUrl)
					await axios.post(ele.targetUrl,{
						ipAddress:ctx.params.ipAddress,
						UNIX_timestamp:Math.round((new Date()).getTime() / 1000)
					})
				})

				return "Done"
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
