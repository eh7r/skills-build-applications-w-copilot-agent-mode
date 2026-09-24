function CollectionPage({ eyebrow, title, description, items, loading, error, emptyMessage, renderItem }) {
  return (
    <main className="collection-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="collection-description">{description}</p>
      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error-message">{error}</p>}
      {!loading && !error && items.length === 0 && <p className="empty-collection">{emptyMessage}</p>}
      {!loading && !error && items.length > 0 && (
        <section className="collection-grid" aria-label={title}>
          {items.map((item, index) => (
            <article className="collection-item" key={item.id || item._id || index}>
              {renderItem(item)}
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default CollectionPage
