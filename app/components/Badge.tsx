import styles from "./Badge.module.css";

interface BadgeProps {
  count: number;
  children: React.ReactNode;
}

export const Badge = ({ count, children }: BadgeProps) => {
  return (
    <div className={styles.badge}>
      {children}
      <span className={styles.badgeCount}>{count > 99 ? "99+" : count}</span>
    </div>
  );
};

export default Badge;
