<template>
  <div class="popup">
    <a-layout>
      <a-layout-header>
        <h1>Intelligent Text Scraper</h1>
      </a-layout-header>
      <a-layout-content>
        <a-button type="primary" @click="scrapeText" :loading="loading">
          Scrape Text
        </a-button>
        <a-textarea
          v-model:value="scrapedText"
          placeholder="Scraped text will appear here"
          :rows="10"
          :autoSize="{ minRows: 5, maxRows: 15 }"
        />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Button, Layout, Input } from 'ant-design-vue';

export default defineComponent({
  components: {
    AButton: Button,
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    ATextarea: Input.TextArea,
  },
  setup() {
    const scrapedText = ref('');
    const loading = ref(false);

    const scrapeText = async () => {
      loading.value = true;
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const response = await chrome.tabs.sendMessage(tab.id!, { action: 'scrapeText' });
        scrapedText.value = response.text;
      } catch (error) {
        console.error('Error scraping text:', error);
        scrapedText.value = 'Error scraping text. Please try again.';
      } finally {
        loading.value = false;
      }
    };

    return {
      scrapedText,
      loading,
      scrapeText,
    };
  },
});
</script>

<style scoped>
.popup {
  width: 400px;
  padding: 16px;
}
</style>