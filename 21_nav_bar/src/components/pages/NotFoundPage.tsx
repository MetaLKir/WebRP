import type { FC } from "react";

export const NotFoundPage: FC = () => {
    return (
        <section className="page">
            <h2 className="page-title">Page not found</h2>
            <p className="page-text">
                Sorry, the page you are looking for does not exist.
            </p>
        </section>
    );
};