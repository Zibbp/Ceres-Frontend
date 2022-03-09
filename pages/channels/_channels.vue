<template>
  <div>
    <channel-header :channel="channel"></channel-header>
    <div class="container mx-auto">
      <vods-section :channel="channel" :apiURL="$config.apiURL"></vods-section>
    </div>
  </div>
</template>

<script>
import ChannelHeader from '~/components/Channel/ChannelHeader.vue'
import VodsSection from '~/components/Vod/VodsSection.vue'
export default {
  async asyncData({ params, env, query, req, res, $config, $axios, error }) {
    try {
      const channel = await $axios.$get(
        `${$config.apiURL}/v1/channels/${params.channels}`
      )
      return { channel }
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'Channel not found' })
      } else {
        error({ statusCode: 500, message: 'Internal server error' })
      }
    }
  },
  head() {
    return {
      title: `${this.channel.displayName}'s Videos`,
      meta: [
        {
          hid: `${this.channel.displayName}-videos`,
          name: `${this.channel.displayName}-videos`,
          content: `${this.channel.displayName}'s videos`,
        },
      ],
    }
  },
  components: {
    ChannelHeader,
    VodsSection,
  },
  data() {
    return {}
  },
}
</script>

<style>
.channel-header {
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3crect width='1440' height='250' x='0' y='0' fill='rgba(42%2c 9%2c 68%2c 1)'%3e%3c/rect%3e%3cpath d='M26 250L276 0L423 0L173 250z' fill='url(%23SvgjsLinearGradient1007)'%3e%3c/path%3e%3cpath d='M280.6 250L530.6 0L674.6 0L424.6 250z' fill='url(%23SvgjsLinearGradient1007)'%3e%3c/path%3e%3cpath d='M508.20000000000005 250L758.2 0L971.2 0L721.2 250z' fill='url(%23SvgjsLinearGradient1007)'%3e%3c/path%3e%3cpath d='M719.8000000000001 250L969.8000000000001 0L1218.8000000000002 0L968.8000000000001 250z' fill='url(%23SvgjsLinearGradient1007)'%3e%3c/path%3e%3cpath d='M1393 250L1143 0L954 0L1204 250z' fill='url(%23SvgjsLinearGradient1008)'%3e%3c/path%3e%3cpath d='M1190.4 250L940.4000000000001 0L808.4000000000001 0L1058.4 250z' fill='url(%23SvgjsLinearGradient1008)'%3e%3c/path%3e%3cpath d='M955.8 250L705.8 0L627.8 0L877.8 250z' fill='url(%23SvgjsLinearGradient1008)'%3e%3c/path%3e%3cpath d='M697.1999999999999 250L447.19999999999993 0L147.19999999999993 0L397.19999999999993 250z' fill='url(%23SvgjsLinearGradient1008)'%3e%3c/path%3e%3cpath d='M1230.228159881603 250L1440 40.22815988160295L1440 250z' fill='url(%23SvgjsLinearGradient1007)'%3e%3c/path%3e%3cpath d='M0 250L209.77184011839705 250L 0 40.22815988160295z' fill='url(%23SvgjsLinearGradient1008)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1007'%3e%3cstop stop-color='rgba(126%2c 15%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(126%2c 15%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1008'%3e%3cstop stop-color='rgba(126%2c 15%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(126%2c 15%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
</style>
