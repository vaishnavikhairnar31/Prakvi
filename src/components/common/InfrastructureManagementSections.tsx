
import type { ServiceItem } from '../../types';

import { ArchitectureCarousel } from './ArchitectureCarousel';
import { ArchitectureOfferingsWorkflow } from './ArchitectureOfferingsWorkflow';
import { EnterpriseArchitectureJourney } from './EnterpriseArchitectureJourney';

import './InfrastructureManagementSections.css';

export function InfrastructureManagementSections({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <>
      {/* Infrastructure Service Offerings */}
      <ArchitectureOfferingsWorkflow
        id="capabilities"
        title={
          service.offeringsTitle ||
          'Additional Service Offerings'
        }
        description={
          service.offeringsSubtitle ||
          'Our Infrastructure Management Services are meticulously designed to align with your specific business requirements.'
        }
        services={service.capabilities}
        illustrationCollection="infrastructure-management"
        palette="infrastructure-management"
        ariaLabel="Infrastructure Management"
      />

      {/* Infrastructure Management Process */}
      <EnterpriseArchitectureJourney
        sectionId="infrastructure-process"
        title={
          service.processTitle ||
          'Why Choose Prakvi for Infrastructure Management?'
        }
        description={service.processSubtitle || ''}
        steps={service.deliverySteps}
        ariaLabel="Infrastructure Management"
      />

      {/* Infrastructure Technology Stack */}
      {!!service.stackTabs?.length && (
        <ArchitectureCarousel
          sectionId="infrastructure-capabilities"
          title={service.stackTitle || service.title}
          description={service.stackSummary}
          categories={service.stackTabs}
        />
      )}
    </>
  );
}
