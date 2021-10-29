import { PrismaClient } from "@prisma/client";

import Layout from "../../components/Layout";
import styles from "../../styles/Partner.module.css";

const prisma = new PrismaClient();

export default function Partner(props) {
  const leads = props.leads;
  return (
    <Layout>
      <div>
        {leads.map((lead) => (
          <div key={lead.id}>
            {lead.firstName} {lead.lastName}
          </div>
        ))}
        {/* {console.log(leads)} */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const allLeads = await prisma.lead.findMany();
  return {
    props: {
      leads: allLeads,
    },
  };
}
