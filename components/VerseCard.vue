<template>
  <div class="verse__root">
    <div
      v-for="(verse, index) in verseArray"
      :key="index"
      :id="`verse-${index}`"
      class="verse block_content has-shadow">
      <div class="verse__header">
        <div class="verse__index tag_index">
          {{ Number(index) }}
        </div>
        <div class="verse__header--right">
          <MdBookmarkIcon
            w="30px"
            h="30px"
            @click="doSetLastReadVerse({ surah: surahId, verse: Number(index) })"/>
          <MdShareIcon
            w="30px"
            h="30px"
            @click="shareVerse(verse, Number(index))"/>
        </div>
      </div>
      <div class="divider clearfix">
        <div class="verse__arabic">
          {{ verse }}
        </div>
      </div>
      <div class="divider clearfix">
        <div class="verse__translation">
          {{ getTranslation(index) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MdShareIcon from 'icons/md-share'
import MdBookmarkIcon from 'icons/md-bookmark'

export default {
  name: 'VerseCard',
  components: {
    MdShareIcon,
    MdBookmarkIcon
  },
  props: {
    verseArray: {
      type: [Object, Array],
      default: () => ({})
    },
    translations: {
      type: Object,
      default: () => ({})
    },
    surahId: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState([
      'surahFavorite'
    ])
  },
  methods: {
    ...mapActions([
      'setLastReadVerse',
      'showNotification'
    ]),
    getTranslation (indexVerse) {
      return this.translations.id.text[indexVerse]
    },
    doSetLastReadVerse (data) {
      this.setLastReadVerse(data)
      this.showNotification({
        title: 'Pesan Sukses',
        message: 'Ayat telah ditambahkan ke terakhir dibaca.'
      })
    },
    shareVerse (verse, index) {
      /* eslint-disable */
      if (navigator.share) {
        navigator.share({
          title: `QS ${this.surahId}:${index}`,
          text: `${verse}

          ${this.getTranslation(index)} (QS ${this.surahId}:${index})`,
          url: `https://quran-offline.netlify.com/${this.surahId}#verse-${index}`,
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.verse {
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__arabic {
    font-size: 2rem;
    width: 100%;
    float: right;
    text-align: right;
    margin-top: .25em;
  }
  &__translation {
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    font-style: italic;
    margin-top: 1.5em;
  }
}
</style>