import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Vue3Sanitize from 'vue-3-sanitize'
import BlogPostComments from '../src/components/BlogPostComments.vue'

const config = {
    global: {
        plugins: [Vue3Sanitize],
    },
    attachTo: document.body,
}

describe('Blog post comments under XSS attack', () => {
    it('renders the comments', async () => {
        const wrapper = mount(BlogPostComments, config)

        await wrapper.vm.$nextTick()

        expect(wrapper.findAll('[data-test="comment"]')).toHaveLength(3)
    })
})
