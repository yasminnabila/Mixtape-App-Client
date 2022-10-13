<script>
export default {
  name: "TableAlbum",
  props: ["tracks"],
  methods: {
    toSecond(ms) {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    cutString(str, num) {
      return str.length > num ? str.substring(0, num) + "..." : str;
    },
  },
};
</script>

<template>
  <h1>Hai!</h1>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl md:container md:mx-auto overflow-x-auto relative"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-transparent dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">#</th>
          <th scope="col" class="py-3 px-6">Title</th>
          <th scope="col" class="py-3 px-6">Artist</th>
          <th scope="col" class="py-3 px-6">Preview</th>
          <th scope="col" class="py-3 px-6">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(track, i) in tracks"
          :key="track?.id || track?.track?.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="p-4 w-4">{{ i + 1 }}</td>
          <td
            class="flex items-center gap-2 py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              :src="
                track?.track?.album?.images?.[0]?.url ||
                track?.album?.images?.[0]?.url
              "
              width="64"
              class="rounded"
            />{{ cutString(track?.track?.name || track?.name, 35) }}
          </td>
          <td class="py-4 px-6">
            <router-link
              :to="`/artist/${
                track?.track?.artists?.[0]?.id || track?.artists?.[0]?.id
              }`"
              >{{
                cutString(
                  track?.track?.artists?.[0]?.name || track?.artists?.[0]?.name,
                  15
                )
              }}</router-link
            >
          </td>
          <td class="py-4 px-6">
            <audio controls="" class="g-blue-600">
              <source
                :src="track?.track?.preview_url || track?.preview_url"
                type="audio/ogg"
              />
              <source
                :src="track?.track?.preview_url || track?.preview_url"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </td>

          <td class="py-4 px-6">
            {{ toSecond(track?.track?.duration_ms || track?.duration_ms) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
