/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', direction: 'rtl', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#c0392b' }}>مرحباً بك! 👋</h1>
      <p style={{ fontSize: '18px' }}>
        شاشة العرض كانت بيضاء لأن الكود الذي أرسلته موجود في المحادثة فقط ولم يتم إضافته لملفات المشروع.
        نظراً لأن الكود الخاص بك طويل جداً، لا يمكنني كتابته بالكامل دفعة واحدة بسبب قيود النظام.
      </p>
      <div style={{ background: '#f0f4f8', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <h2 style={{ color: '#0d6e8a', marginTop: 0 }}>لحل المشكلة وتشغيل الاختبار فوراً:</h2>
        <ol style={{ fontSize: '16px', fontWeight: 'bold' }}>
          <li>من القائمة الجانبية على اليسار، افتح ملف <code>index.html</code>.</li>
          <li>قم بمسح كل الأكواد الموجودة بداخله.</li>
          <li>انسخ كود الـ HTML الخاص بك بالكامل (الذي أرسلته في أول رسالة) والصقه هناك.</li>
          <li>انسخ كود الجافاسكريبت الموجود في المحادثة والصقه قبل <code>&lt;/body&gt;</code> لكي تعمل الأزرار.</li>
        </ol>
      </div>
    </div>
  );
}
