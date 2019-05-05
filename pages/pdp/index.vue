
<style lang="sass" scoped>

.form
    & h2
        margin-bottom: 0.5rem;
    & .icon
        width: 4rem;
        cursor: pointer;

</style>

<template>
    <div
        class="pr-2rem pl-2rem form text-drak vw-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
        <h2>性格测试</h2>
        <section>
            <h5
                class="text-grey"
                style="text-align: center;"
            >PS: 测试结果无好坏对错之分,仅用于匹配度和面谈参考之用。尽可能真实快速作答</h5>
        </section>
        <nuxt-link to="/ts/hr/pdp/enrollment">
            <div>
                <svg
                    t="1556341450544"
                    class="icon"
                    style=""
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="879"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <defs>
                        <style type="text/css"></style>
                    </defs>
                    <path
                        d="M512 992a484.4 484.4 0 0 1-191.856-39.824 36.32 36.32 0 1 1 28.96-66.608 409.248 409.248 0 1 0-173.024-143.344 36.448 36.448 0 0 1-60.096 41.264A480.112 480.112 0 1 1 512 992z"
                        p-id="880"
                    ></path>
                    <path
                        d="M728.592 551.024H308.944a36.944 36.944 0 1 1 0-73.888h419.648a36.944 36.944 0 1 1 0 73.888z"
                        p-id="881"
                    ></path>
                    <path
                        d="M540.928 738.672a34.656 34.656 0 0 1-25.856-11.088 36.576 36.576 0 0 1 0-52.464l161.808-161.808-161.808-161.808a37.104 37.104 0 1 1 52.464-52.464l188.4 188.4a37.632 37.632 0 0 1 11.088 25.856 34.656 34.656 0 0 1-11.088 25.856L567.536 727.552a36.8 36.8 0 0 1-26.608 11.12z"
                        p-id="882"
                    ></path>
                </svg>
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {};
</script>
