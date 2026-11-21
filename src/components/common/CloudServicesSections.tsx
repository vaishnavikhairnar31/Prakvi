
import type { ServiceItem } from '../../types';

import { ArchitectureCarousel } from './ArchitectureCarousel';
import { ArchitectureOfferingsWorkflow } from './ArchitectureOfferingsWorkflow';
import { EnterpriseArchitectureJourney } from './EnterpriseArchitectureJourney';

import './CloudServicesSections.css';

export function CloudServicesSections({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <>
      {/* Cloud Service Offerings */}
      <ArchitectureOfferingsWorkflow
        id="capabilities"
        title={service.offeringsTitle || 'Other Services Offered'}
        description={
          service.offeringsSubtitle ||
          'We provide end-to-end cloud services customized to meet your specific business requirements.'
        }
        services={service.capabilities}
        illustrationCollection="cloud-services"
        palette="cloud-services"
        ariaLabel="Cloud Services"
      />

      {/* Cloud Services Process */}
      <EnterpriseArchitectureJourney
        sectionId="cloud-services-process"
        title={
          service.processTitle ||
          'Why Choose Prakvi for Cloud Services?'
        }
        description={service.processSubtitle || ''}
        steps={service.deliverySteps}
        ariaLabel="Cloud Services"
      />

      {/* Cloud Technology Stack */}
      {!!service.stackTabs?.length && (
        <ArchitectureCarousel
          sectionId="cloud-services-capabilities"
          title={service.stackTitle || service.title}
          description={service.stackSummary}
          categories={service.stackTabs}
        />
      )}
    </>
  );
}
