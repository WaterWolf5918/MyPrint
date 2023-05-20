<script>
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Appbar from './Appbar.svelte';
	// import './styles.css';
</script>

<div class="mobile-display">
    <!-- <Header></Header> -->
    <slot></slot>
    <!-- <Header></Header> -->
    <Appbar></Appbar>
</div>
<div class="desktop-display">
    <Sidebar></Sidebar>
    <div class="scroll">
        <slot></slot>
    </div>
</div>
<style>
    div.scroll{
        overflow-y: scroll;
        height: 100vh;
    }

    .mobile-display{display:none}
    .desktop-display{display:block}
    @media (max-width:1024px){
        .desktop-display {display:none}
        .mobile-display {display:block}
    }
</style>