<script setup lang="ts">
import { ref } from 'vue'

const comments = ref<
    {
        body: string
        name: string
    }[]
>([
    {
        name: 'John Doe',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        name: 'Jane Doe',
        body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Alice Doe',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
])

const newComment = ref('')

function addComment() {
    comments.value.push({
        name: 'Me',
        body: newComment.value,
    })

    newComment.value = ''
}
</script>
<template>
    <div class="py-4">
        <h2 class="mb-4 text-2xl font-bold">Comments</h2>
        <ul class="space-y-4">
            <li
                v-for="(comment, index) in comments"
                :key="index"
                class="p-4 rounded-lg shadow-md bg-base-100"
                data-test="comment"
            >
                <strong class="block text-lg font-semibold text-primary">{{
                    comment.name
                }}</strong>
                <div
                    class="mt-2 prose text-base-content"
                    v-html="$sanitize(comment.body)"
                ></div>
            </li>
        </ul>

        <form @submit.prevent="addComment">
            <textarea
                class="w-full mt-5 textarea textarea-bordered"
                placeholder="Your new comment..."
                v-model="newComment"
            ></textarea>
            <p class="my-1">
                Write your comment in HTML to support rich text output
                <br />
                <span class="text-sm opacity-50">
                    (in a real world app you probably aren't asking a user to
                    write HTML for a commment but you can certainly get HTML
                    from a popular WYSIWYG editor like TinyMCE or TipTap, store
                    it to your database, and use it on your page. That's fine
                    and most flexible if the HTML is coming from a trusted
                    source (like an internal tool with ALL trusted users) but is
                    a security risk when it's coming from untrusted users (like
                    random people commenting on your site))
                </span>
            </p>
            <button class="btn btn-primary">Comment</button>
        </form>
    </div>
</template>
