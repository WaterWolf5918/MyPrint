<script>
	import Sidebar from './desktop/Navbar-d.svelte';
	import Appbar from './mobile/Navbar-m.svelte';
	// import './styles.css';
</script>

<div class="mobile-display">
    <div class="scroll2">
        <slot></slot>
    </div>
    <div class="spacer"></div>
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
    div.scroll2{
        overflow-y: scroll;
        height: 100%;
    }
    .spacer{
        margin-top: 3em;
    }

    .mobile-display{display:none}
    .desktop-display{display:block}
    @media (max-width:1024px){
        .desktop-display {display:none}
        .mobile-display {display:block}
    }
</style>