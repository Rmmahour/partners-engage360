// import { LeadForm } from "@/components/lead-form"
import HubSpotForm from "./lead-form";

const Map = () => {
  return (
    <div className="w-full h-[450px] md:h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.11777304656!2d77.29796456855857!3d28.46359802607634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce75cd87d883b%3A0xb3bb155f6f80ae39!2sSSR%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1759833877994!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;


export function ContactApply() {

  const portalId = "242830238";
  const formId = "371299e1-44d5-4eab-bb07-cf9c760665f0";

  return (
    <section className="py-12" id="apply">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
        {/* Contact Details */}
        <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Contact & Partnership Desk</h3>
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <div className="font-medium">Company Address</div>
              <p className="mt-1">
                Basiq360 Pvt. Ltd.
                <br />
                G1-G3, SSR Corporate Park, 13/6, NH-19,
                <br />
                Faridabad, Haryana 121003
                <br />
                India
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="font-medium">Email</div>
                <p className="mt-1">
                  <a className="underline" href="mailto:connect@basiq360.com">
                    connect@basiq360.com
                  </a>
                </p>
              </div>
              <div>
                <div className="font-medium">Phone / WhatsApp</div>
                <p className="mt-1">
                  <a className="underline" href="tel:+91 935 005 9390">
                    +91 935 005 9390
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="font-medium">Office Hours</div>
              <p className="mt-1">Mon–Fri, 9:30 AM – 6:30 PM (IST)</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-slate-200 bg-slate-100 aspect-video flex items-center justify-center text-xs text-slate-500">
            <Map/>
          </div>
        </div>
        {/* Apply Form */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200">
          {/* <h3 className="text-xl font-semibold mb-4">Apply to Join</h3> */}
          <HubSpotForm data-region="na2" portalId={portalId} formId={formId} targetId="form-section-2" />
        </div>
      </div>
    </section>
  )
}
