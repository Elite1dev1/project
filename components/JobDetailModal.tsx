"use client"

import { useState } from 'react';
import { Job, UserSkills } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Building2, MapPin, DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getSkillGapSuggestions } from '@/lib/data';
import { cn } from '@/lib/utils';

interface JobDetailModalProps {
  job: Job | null;
  userSkills: UserSkills;
  isOpen: boolean;
  onClose: () => void;
}

export function JobDetailModal({ job, userSkills, isOpen, onClose }: JobDetailModalProps) {
  const [applied, setApplied] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  if (!job) return null;
  
  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const missingSkills = getSkillGapSuggestions(job.requiredSkills, userSkills.skills);
  const hasAllSkills = missingSkills.length === 0;
  
  const handleApply = () => {
    if (hasAllSkills) {
      setApplied(true);
    } else {
      setShowAlert(true);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose();
        setApplied(false);
        setShowAlert(false);
      }
    }}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
          <DialogDescription className="flex items-center">
            <Building2 className="h-4 w-4 mr-1" />
            {job.company}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>{job.salary}</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Match Score</span>
              <span className="text-sm font-medium">{job.matchScore}%</span>
            </div>
            <Progress 
              value={job.matchScore} 
              indicatorColor={getMatchScoreColor(job.matchScore)}
              className="h-2"
            />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Job Description</h4>
            <p className="text-muted-foreground">{job.description}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant={userSkills.skills.includes(skill) ? "default" : "outline"}
                  className={cn(
                    userSkills.skills.includes(skill) ? "bg-primary" : "",
                    "text-xs"
                  )}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {showAlert && !hasAllSkills && (
            <Alert variant="destructive" className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Missing Required Skills</AlertTitle>
              <AlertDescription>
                <p>You're missing the following skills:</p>
                <ul className="list-disc list-inside mt-2">
                  {missingSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <p className="mt-2">Consider upskilling in these areas to improve your match score.</p>
              </AlertDescription>
            </Alert>
          )}
          
          {applied && (
            <Alert className="bg-green-50 border-green-200 text-green-800 mt-4">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Application Submitted!</AlertTitle>
              <AlertDescription className="text-green-700">
                Your application for {job.title} at {job.company} has been submitted successfully.
              </AlertDescription>
            </Alert>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={handleApply}
            disabled={applied}
          >
            {applied ? 'Applied' : 'Apply Now'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}