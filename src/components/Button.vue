<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'secondary'].includes(value)
        },
        onClick: {
            type: Function,
            default: () => { }
        }
    },
    computed: {
        typeClass() {
            return `btn--${this.type}`;
        }
    }
};
</script>
<template>
    <button class="btn" :class="typeClass" @click="onClick">
        <slot>hello</slot>
    </button>
</template>

<style>
.btn {
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #f0f0f0;
}

.btn--primary {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.btn--secondary {
  background-color: #6c757d;
  color: #fff;
  border-color: #6c757d;
}
</style>