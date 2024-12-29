function Arrow_Down ({ link_to = "#phoenix_main" }) {
    return (
        <a href={link_to} className="arrow_down" aria-label="Scroll down">
            <span class="material-symbols-outlined arrow_down">arrow_downward</span>
        </a>
    )
}

export default Arrow_Down;