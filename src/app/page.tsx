import styles from './page.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Simple Budget Privacy Policy</h1>
          <p className={styles.appName}>Simple Budget App</p>
          <p className={styles.lastUpdated}>Last Updated: January 2025</p>
        </header>

        <section className={styles.glanceSection}>
          <h2>Privacy at a Glance</h2>
          <div className={styles.glanceGrid}>
            <div className={styles.glanceItem}>
              <h3>No data collection</h3>
              <p>Your data never leaves your device</p>
            </div>
            <div className={styles.glanceItem}>
              <h3>No internet required</h3>
              <p>Works completely offline</p>
            </div>
            <div className={styles.glanceItem}>
              <h3>No tracking</h3>
              <p>Zero analytics or monitoring</p>
            </div>
            <div className={styles.glanceItem}>
              <h3>Local storage only</h3>
              <p>Everything stays on your phone</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.paragraph}>
            Simple Budget is designed with privacy as a fundamental principle. This Privacy Policy explains how we handle your information when you use our iOS budget tracking application. Our commitment is simple: your financial data stays on your device, period.
          </p>
          <p className={styles.paragraph}>
            By using Simple Budget, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data We Don't Collect</h2>
          <p className={styles.paragraph}>Simple Budget operates on a zero-data-collection model</p>
          <p className={styles.paragraph}>We do NOT collect, store, or transmit any of the following:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Personal financial information (income, expenses, budgets)</li>
            <li className={styles.listItem}>Personal identification information</li>
            <li className={styles.listItem}>Usage analytics or behavioral data</li>
            <li className={styles.listItem}>Device information or identifiers</li>
            <li className={styles.listItem}>Location data</li>
            <li className={styles.listItem}>Crash reports or diagnostic data</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Local Data Storage</h2>
          <p className={styles.paragraph}>How your data is stored securely on your device</p>
          <h3 className={styles.sectionSubtitle}>What Data is Stored Locally:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Budget categories and amounts</li>
            <li className={styles.listItem}>Income and expense transactions</li>
            <li className={styles.listItem}>App settings and preferences</li>
            <li className={styles.listItem}>Authentication preferences</li>
          </ul>
          <h3 className={styles.sectionSubtitle}>Where Data is Stored:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>App's sandboxed directory (inaccessible to other apps)</li>
            <li className={styles.listItem}>iOS Keychain (for encryption keys)</li>
            <li className={styles.listItem}>No cloud storage or external servers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Security Measures</h2>
          <p className={styles.paragraph}>Enterprise-grade security protecting your financial data</p>
          <h3 className={styles.sectionSubtitle}>Biometric Authentication</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Face ID / Touch ID support</li>
            <li className={styles.listItem}>Automatic fallback to device passcode</li>
            <li className={styles.listItem}>Configurable auto-lock timeout</li>
            <li className={styles.listItem}>Secure lock screen interface</li>
          </ul>
          <h3 className={styles.sectionSubtitle}>Data Encryption</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>AES-256 encryption for all financial data</li>
            <li className={styles.listItem}>Encryption keys stored in iOS Keychain</li>
            <li className={styles.listItem}>All data encrypted at rest</li>
            <li className={styles.listItem}>Automatic migration to encrypted storage</li>
          </ul>
          <h3 className={styles.sectionSubtitle}>Additional Security Features:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Input validation and sanitization</li>
            <li className={styles.listItem}>SQL injection prevention</li>
            <li className={styles.listItem}>Secure data export functionality</li>
            <li className={styles.listItem}>No third-party libraries or dependencies</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Data Control</h2>
          <p className={styles.paragraph}>You have complete control over your data</p>
          <h3 className={styles.sectionSubtitle}>Export Your Data:</h3>
          <p className={styles.paragraph}>Export all your financial data as JSON format for backup or migration purposes.</p>
          <h3 className={styles.sectionSubtitle}>Delete Your Data:</h3>
          <p className={styles.paragraph}>Permanently delete all app data with confirmation prompts to prevent accidental deletion.</p>
          <h3 className={styles.sectionSubtitle}>Data Portability:</h3>
          <p className={styles.paragraph}>Since all data is stored locally, you can easily backup and restore your information as needed.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p className={styles.paragraph}>Simple Budget does not use any third-party services.</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>No analytics services (Google Analytics, Firebase, etc.)</li>
            <li className={styles.listItem}>No advertising networks</li>
            <li className={styles.listItem}>No crash reporting services</li>
            <li className={styles.listItem}>No cloud storage providers</li>
            <li className={styles.listItem}>No social media integrations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>App Store Compliance</h2>
          <p className={styles.paragraph}>Simple Budget complies with all Apple App Store privacy requirements:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Privacy nutrition labels accurately reflect no data collection</li>
            <li className={styles.listItem}>Face ID usage properly described in app permissions</li>
            <li className={styles.listItem}>Encryption compliance documentation available</li>
            <li className={styles.listItem}>No tracking across apps or websites</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this policy. Since Simple Budget operates entirely offline, we recommend checking this page periodically for updates.
          </p>
          <p className={styles.paragraph}>
            Significant changes to our privacy practices will be communicated through app updates and release notes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions about this Privacy Policy or Simple Budget's privacy practices, please contact us:
          </p>
          <p className={styles.paragraph}>
            Email: <a href="mailto:bilergunes@gmail.com">bilergunes@gmail.com</a><br />
            Subject: Privacy Policy Inquiry
          </p>
        </section>

        <footer className={styles.footer}>
          <p>Simple Budget - Your Privacy, Your Data, Your Device</p>
        </footer>
      </div>
    </main>
  );
} 