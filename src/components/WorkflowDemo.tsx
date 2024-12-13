import React from 'react';
import { FileText, User, Tag, Briefcase, GitBranch } from 'lucide-react';
import WorkflowHeader from './workflow/WorkflowHeader';
import WorkflowTabs from './workflow/WorkflowTabs';
import WorkflowNode from './workflow/WorkflowNode';
import WorkflowBranch from './workflow/WorkflowBranch';

export default function WorkflowDemo() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#512889] mb-4">
            Powerful Workflow Automation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Build sophisticated marketing workflows without code
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
          <WorkflowHeader />
          <WorkflowTabs />
          
          <div className="p-8">
            {/* Workflow Builder Area */}
            <div className="relative">
              {/* Triggers */}
              <div className="flex justify-center space-x-4 mb-8">
                <WorkflowNode
                  icon={<FileText className="h-5 w-5 text-emerald-500" />}
                  title="FB Leads"
                  type="trigger"
                />
                <WorkflowNode
                  icon={<FileText className="h-5 w-5 text-emerald-500" />}
                  title="Funnel Form Submitted"
                  type="trigger"
                />
                <button className="w-72 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500">
                  + Add New Trigger
                </button>
              </div>

              {/* Main Flow */}
              <div className="flex flex-col items-center space-y-8">
                <div className="w-px h-8 bg-gray-300" />
                
                <WorkflowNode
                  icon={<User className="h-5 w-5 text-blue-500" />}
                  title="Assign to user"
                />

                <div className="w-px h-8 bg-gray-300" />

                <WorkflowNode
                  icon={<Tag className="h-5 w-5 text-blue-500" />}
                  title="Add Tag 'New Lead'"
                />

                <div className="w-px h-8 bg-gray-300" />

                <WorkflowNode
                  icon={<Briefcase className="h-5 w-5 text-blue-500" />}
                  title="Create Opportunity '001'"
                  subtitle="New Lead"
                />

                <div className="w-px h-8 bg-gray-300" />

                <WorkflowNode
                  icon={<Tag className="h-5 w-5 text-blue-500" />}
                  title="Tag based on how they became a lead"
                />

                {/* Branching Section */}
                <div className="relative w-full max-w-4xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gray-300" />
                  <div className="flex justify-between pt-8">
                    <WorkflowBranch
                      label="FB Leads"
                      condition="If 'Workflow Trigger' is 'FB Leads'"
                    >
                      <WorkflowNode
                        icon={<Tag className="h-5 w-5 text-blue-500" />}
                        title="Add Tag 'FB lead'"
                      />
                    </WorkflowBranch>

                    <WorkflowBranch
                      label="Funnel Leads"
                      condition="If 'Workflow Trigger' is 'Funnel Form...'"
                    >
                      <WorkflowNode
                        icon={<Tag className="h-5 w-5 text-blue-500" />}
                        title="Add Tag 'Funnel lead'"
                      />
                    </WorkflowBranch>

                    <WorkflowBranch
                      label="None"
                      condition="When none of the conditions are met"
                    >
                      <div className="bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500">
                        END
                      </div>
                    </WorkflowBranch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}