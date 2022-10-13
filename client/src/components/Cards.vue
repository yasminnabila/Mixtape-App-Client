<script>
export default {
  props: ["data", "typeCard"],
  methods: {
    cutString(str, num) {
      return str.length > num ? str.substring(0, num) + "..." : str;
    },
  },
};
</script>

<template>
  <div class="rounded-sm border-gray-600 shadow-sm dark:border-gray-500">
    <router-link :to="`/${typeCard}/${data?.id || data?.name}`">
      <img
        class="p-2 w-full rounded-lg"
        :src="data?.images?.[0]?.url || data?.genres || data.imageUrl"
        :alt="data?.name"
        style="width: 14rem"
      />
    </router-link>
    <div class="px-5 pb-5">
      <h6>
        <router-link :to="`/${typeCard}/${data.id || data?.name}`">{{
          cutString(data?.name, 24)
        }}</router-link>
      </h6>
    </div>
  </div>
</template>
